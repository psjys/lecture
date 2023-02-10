package com.ncs.green;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;
import service.JoService;
import service.MemberService;
import vo.JoVO;
import vo.MemberVO;
import vo.RestVO;

//** @RestController
//=> 스프링4 부터 추가됨,
// Controller의 모든 매핑메서드 리턴타입을 기존과 다르게 처리함을 명시
// viewPage가 아닌 Data를 다양한 Type으로 return 하며,
//  이들을 JSON이나 XML로 자동으로 처리함.
//=> Return 데이터 Type
//- String, Integer 등의 단일값
//- 사용자정의 객체
//- Collection
//- ResponseEntity<> 타입 : 주로 이용됨

@RestController
@RequestMapping("/rest")
@Log4j
@AllArgsConstructor
//=> 모든 컬럼을 매개변수로 하고 초기화 하는 생성자
//아래 service 를 초기화 해주기때문에 @Autowired 필요없음 
//단, 해당하는 클래스(JoServiceImpl) 는 생성 되어있어야함. ( @Autowired 와 동일)
//=> 스프링이 Controller 생성시에 이 생성자를 사용하여 초기화함  
public class RTestController {

	// @Autowired -> @AllArgsConstructor 에서 생성자 주입하므로 필요없음
	JoService service;
	MemberService mservice;
	PasswordEncoder passwordEncoder;
	/*
	 * => @AllArgsConstructor 가 자동으로 처리 RTestController(JoService service,
	 * MemberService mservice, PasswordEncoder passwordEncoder) {
	 * this.service=service; this.mservice=mservice;
	 * this.passwordEncoder=passwordEncoder; }
	 */

	// ** RestController 의 다양한 Return Type
	// 1) Text Return
	@GetMapping(value = "/gettext", produces = "text/plain; charset=UTF-8")
	// => produces 속성
	// - 해당 메서드 결과물의 MIME Type을 의미 ( UI Content-Type 에 표시됨 )
	// - 위처럼 문자열로 직접 지정 할수도 있고, 메서드내의 MediaType 클래스를 이용할 수도 있음
	// - 필수속성은 아님
	public String getText() {
		log.info("** MIME Type : " + MediaType.TEXT_PLAIN_VALUE);
		return "~~ Hello RestAPI 안녕 하세요 여러분 ~~";
	} // getText

	// ~~ 여기부터는 pom 에 dependency 추가 해야함 ~~~~~~~~~~

	// 2) 사용자 정의 객체
	// 2.1) 객체 Return1. : produces 지정한 경우
	@GetMapping(value = "/getvo1", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	// => produces
	// - JSON 과 XML 방식의 데이터를 생성할 수 있도록 설정
	// - Response Data Type을 제한 함으로 오류를 줄임
	// - 입력값을 제한할때는 "consumes" 속성 사용

	// => 요청 url의 확장자에 따라 다른 타입으로 서비스
	// - Test1) 브라우져에서 /rest/getvo1 호출 -> 위 둘중 XML 전송(default)
	// - Test2) 브라우져에서 /rest/getvo2.json 호출 -> JSON 전송
	public RestVO getvo1() {
		log.info("** MIME Type : " + MediaType.TEXT_PLAIN_VALUE);
		return new RestVO(99, "구구구", "홍길동", "Rest API Test");
	} // getvo1

	// 2.2) 객체 Return2. : produces 지정하지 않은 경우
	// => getVO2 , getVO2.json 호출 : 위1 과 동일한 결과
	@GetMapping("/getvo2")
	public RestVO getvo2() {
		return new RestVO(88, "팔팔팔", "홍길동", "Rest API Test ~~~");
	} // getvo2

	// 3) Collection Return
	// 3.1) Map
	// => XML로 Return하는 경우 Key값 주의 (변수명 규칙)
	// UI(브라우져) 에서 Tag명이 되므로 반드시 문자로 한다.
	// ( 첫글자 숫자, 특수문자 모두 안됨 주의, 단 json Type 은 무관함 )
	// -> 222, -Second, 2nd, ..... 등등, 그러나 한글은 허용
	// => map 은 출력 순서 무관
	@GetMapping("/getmap")
	public Map<String, RestVO> getmap() {
		Map<String, RestVO> map = new HashMap<String, RestVO>();
		map.put("일번", new RestVO(111, "일일일", "홍길동", "Rest API Test ~~~"));
		map.put("222", new RestVO(222, "이이이", "홍길동", "Rest API Test ~~~"));
		map.put("삼번", new RestVO(333, "삼삼삼", "홍길동", "Rest API Test ~~~"));

		return map;
	} // getmap

	// 3.2) List
	@GetMapping(value = "/getlist")
	public List<JoVO> getlist() {
		return service.selectList();
	} // getlist

	// ** ResponseEntity Test
	// => Status (200, 404 등 응답 상태 코드) , Headers, Body 등을 함께 전송할수있음.
	// => 아래 incheck() 메서드는 "jno", "chief" 를 반드시 Parameter로 전달 받아야 하며
	// 만약 하나라도 전달받지 못하면 "400–잘못된 요청" 오류 발생
	// 전달된 jno값의 조건에 의하여 502(BAD_GATEWAY) 또는 200(OK) 상태코드와 데이터를 전송할 수 있다.
	// 요청 User가 이 응답결과의 정상/비정상 여부를 알 수 있도록 해준다.
	// => Parameter name과 매개변수는 이름으로 매핑함. (즉, 같아야함)
	// => 200 Test: http://localhost:8080/green/rest/incheck?jno=11&chief=가나다라
	// http://localhost:8080/green/rest/incheck.json?jno=11&chief=가나다라
	// => 502 Test: http://localhost:8080/green/rest/incheck?jno=5&chief=가나다라

	// 4) ResposeEntity
	@GetMapping(value = "/incheck", params = { "jno", "chief" })
	public ResponseEntity<RestVO> incheck(Integer jno, String chief) {
		// 1) 준비
		// => ResponseEntity 정의 & Parameter 처리 (Service 처리)
		ResponseEntity<RestVO> result = null;
		RestVO vo = new RestVO(444, "사사사", chief, "Rest API Parameter Test ~~~");

		// 2) 조건확인 (Service 결과 확인)
		// => jno 값이 10~20 : 정상 , 아니면 오류
		if (jno < 10 || jno > 20) { // 오류
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(vo);
		} else { // 정상
			result = ResponseEntity.status(HttpStatus.OK).body(vo);
		}

		return result;

	} // incheck

	// 5) @PathVariable
	// => URL 경로의 일부를 파라미터로 사용할 때 이용
	// http://localhost:8080/green/rest/product/color/노랑
	// => 요청 URI 매핑에서 템플릿 변수를 설정하고 이를 매핑메서드 매개변수의 값으로 할당 시켜줌.
	// 이 때 파라미터가 1개이면 @PathVariable 과 같이 name을 생략할 수 있다
	@GetMapping("/product/{cate}/{pid}")
	public String[] product(@PathVariable("cate") String cate, @PathVariable("pid") String pid) {
		return new String[] { "** Category : " + cate, "** Product_ID : " + pid };
	} // product

	// 6) @RequestBody
	// => JSON 형식으로 전달된 Data를 컨트롤러에서 사용자정의 객체(VO)로 변환할때 사용
	// => 요청 url : http://localhost:8080/green/rest/convert
	// => Payload : {"jno":33, "chief":"victory", "jname":"삼삼오오",
	// "note":"RequestBody Test 중" }
	@PostMapping("/convert")
	public RestVO convert(@RequestBody RestVO vo) {
		log.info("*** JSON to RestVO => " + vo);
		vo.setJno(vo.getJno() * 100);
		return vo;
	} // convert

	// 7) axRSJoDetail
	// ** 준비
	// => id 로 selectOne 후에 jno 확인
	// => UI : loginForm 을 이용 (수정필요_메뉴추가)
	// Ajax 처리 ( axText03.js )

	// => 요청_url형식으로 Data 전송 : rest/rsdetail1/banana/7
	// => @PathVariable : 기본자료형은 사용할 수 없음
	@GetMapping("/rsdetail1/{id}/{jno}")
	public MemberVO rsdetail1(@PathVariable("id") String id, @PathVariable("jno") Integer jno) {
		log.info("** rsdetail1 id =>" + id);
		log.info("** rsdetail1 jno =>" + jno);
		MemberVO vo = new MemberVO();
		vo.setId(id);
		vo = mservice.selectOne(vo);
		System.out.println("*** " + vo);
		if (vo.getJno() != jno)
			log.info("** rsdetail1 jno 오류 ** ");
		return vo;

	} // rsdetail1

	// 8) axRSJoDetail 2
	// => ResponseEntity 적용
	@GetMapping("/rsdetail2/{id}/{jno}")
	public ResponseEntity<MemberVO> rsdetail2(@PathVariable("id") String id, @PathVariable("jno") Integer jno) {
		ResponseEntity<MemberVO> result = null;
		
		MemberVO vo = new MemberVO();
		vo.setId(id);
		vo = mservice.selectOne(vo);
		
		// => 성공 (200 OK) : vo != null 동시에 jno 가 일치하는 경우 
		
		if (vo != null && jno==vo.getJno()) {
			log.info("** rsdetail2 jno 일치 ** ");
			result = ResponseEntity.status(HttpStatus.OK).body(vo);
		} else {
			log.info("** rsdetail2 jno 일치하지 않음 ** ");	
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(vo);
		}
		return result;
		
	} // rsdetail2

} // class
