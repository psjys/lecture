package com.example.demo.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.service.MemberService;
import com.google.gson.Gson;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import vo.MemberVO;

//** @RestController
//=> @Controller + @ResponseBody  
//=> @ResponseBody 애너테이션을 생략해도 xhr, ajax, fetch 등의 요청에 응답을 해줄수 있음.

//=> 주용도는 Json 형태로 객체 데이터를 반환하는 것
//   데이터를 Response 로 제공하는 REST API를 개발할 때 주로 사용하며
//   객체를 ResponseEntity로 감싸서 반환함

//=> @Controller : 스프링 MVC 의 컨트롤러  
//   @ReponseBody: 컨트롤러에서 데이터를 반환하기 위해 사용.

@RestController
@RequestMapping("/test")
@Log4j2
@AllArgsConstructor
public class TestController {
	
	MemberService service;
	PasswordEncoder passwordEncoder;
	
	@GetMapping({"/hello"})
	//=> 요청 url : "http://localhost:8088/test/" or " ~~:8088/test/hello"
	public String hello() {
		return "~~~ Hello Spring Boot !!! ~~~";
	} //hello
	
	// ** Response 로 JsonData 를 전송
	// => Gson 활용
	//   (Spring_Boot 에서 처음사용시 로딩이 안될수 있으므로 이클립스 reStart 한다...해결법 확인필) 
	//	-> dependency 추가
	//	-> gson 객체를 new Gson() 으로 초기화한이후 .toJson 으로 리스트 Object를 던져주면,
	//     자동으로 JSON형태의 String으로 변환해줌. 
	@PostMapping(value="/rslogin",
				 consumes=MediaType.APPLICATION_JSON_VALUE  // "application/json" 과 동일 
				 , produces=MediaType.APPLICATION_JSON_VALUE)   
	// => Mapping 시 Request & Response Data Type 을 강제함으로 오류를 줄일수 있음.
	public ResponseEntity<?> rslogin(HttpServletRequest request, 
								HttpServletResponse response, @RequestBody MemberVO vo) {
		// 1) 요청분석
		String password=vo.getPassword();
		ResponseEntity<?> result = null;
		log.info("rslogin vo => "+vo);
		
		// 2) Service & ResponseEntity 처리
		// => vo -> JSON Format 으로 (Gson 이용) 
		// => 성공 -> 로그인정보 session 에 보관 (Jsp사용시 이용) , Status OK 
		// => 실패 -> id오류 Status 500 , pw오류 Status 502
		vo=service.selectOne(vo);
		
		Gson gson = new Gson();
		if ( vo!=null ) {
			// ** id 일치 -> Password 확인 : 암호화 이후
			if ( passwordEncoder.matches(password, vo.getPassword()) ) {
				// 로그인 성공 -> session 에 로그인정보 보관, code="200"
				request.getSession().setAttribute("loginID", vo.getId());
				request.getSession().setAttribute("loginName", vo.getName());
				
				// vo -> JSON
				log.info("*** vo to JSON => "+gson.toJson(vo));
				result = ResponseEntity.status(HttpStatus.OK).body(gson.toJson(vo));
			}else {
				// password 오류
				result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(gson.toJson(vo));
				// => INTERNAL_SERVER_ERROR 500 , BAD_GATEWAY 502
				//	  NOT_FOUND 404, BAD_REQUEST 400
				//    EXPECTATION 417 :기대, 예상 / FORBIDDEN(금지) 403 -> 권한없이 접근하는경우  
				//    CONFLICT(충돌),  CHECKPOINT -> 사용하지말것 (오류발생?)
			}
		}else { // id 오류
			result = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(gson.toJson(vo));
		}
		return result;
	} //rslogin

} //class
