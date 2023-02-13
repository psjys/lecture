package com.ncs.green;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	@GetMapping(value = "/getvo1", produces = { MediaType.APPLICATION_JSON_VALUE, 
												MediaType.APPLICATION_XML_VALUE })
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

	   // 4) ResponseEntity
	   // => ResponseEntity 와 쿼리스트링 Test 
	   // => Parameter 를 쿼리스트링으로 전달하는 경우 서버에서는 
	   //   - params 속성으로 처리가능
	   //   - @RequestParam 으로 처리가능 : @RequestParam("jno") int jno -> MemberController, /dnload 참고
	   
	   //   @GetMapping(value="/incheck", params={"jno", "chief"})
	   //   public ResponseEntity<RestVO> incheck(Integer jno, String chief) {
	      
	   // => params (매개변수와 매핑시 객체만 가능) @RequestParam (기본자료형 가능) 비교해보세요
	   @GetMapping("/incheck")
	   public ResponseEntity<RestVO> incheck(@RequestParam("jno") int jno, String chief) {
	      // 1) 준비
	      // => ResponseEntity 정의 & Parameter 처리 (Service 처리) 
	      ResponseEntity<RestVO> result = null;
	       RestVO vo = new RestVO(jno, "사사사", chief,"Rest API Parameter Test ~~~");
	      // 2) 조건확인 (Service 결과 확인)
	      // => jno 값이 10~20 : 정상, 아니면 오류
	      if ( jno<10 || jno>20 ) {  // 오류
	         result=ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(vo);
	      }else {  // 정상
	         result=ResponseEntity.status(HttpStatus.OK).body(vo);
	      }
	      return result;
	   } //incheck
	   
//	@GetMapping(value = "/incheck", params = { "jno", "chief" })
//	public ResponseEntity<RestVO> incheck(Integer jno, String chief) {
//		// 1) 준비
//		// => ResponseEntity 정의 & Parameter 처리 (Service 처리)
//		ResponseEntity<RestVO> result = null;
//		RestVO vo = new RestVO(444, "사사사", chief, "Rest API Parameter Test ~~~");
//
//		// 2) 조건확인 (Service 결과 확인)
//		// => jno 값이 10~20 : 정상 , 아니면 오류
//		if (jno < 10 || jno > 20) { // 오류
//			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(vo);
//		} else { // 정상
//			result = ResponseEntity.status(HttpStatus.OK).body(vo);
//		}
//
//		return result;
//
//	} // incheck

	// 5) @PathVariable
	// => URL 경로의 일부를 파라미터로 사용할 때 이용
	// http://localhost:8080/green/rest/product/color/노랑
	// => 요청 URI 매핑에서 템플릿 변수를 설정하고 이를 매핑메서드 매개변수의 값으로 할당 시켜줌.
	// 이 때 파라미터가 1개이면 @PathVariable 과 같이 name을 생략할 수 있다
	@GetMapping("/product/{cate}/{pid}")
	public String[] product(@PathVariable("cate") String cate, 
							@PathVariable("pid") String pid) {
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
	public MemberVO rsdetail1(@PathVariable("id") String id, 
							  @PathVariable("jno") Integer jno) {
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
	public ResponseEntity<MemberVO> rsdetail2(@PathVariable("id") String id, 
											  @PathVariable("jno") Integer jno) {
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
	
	// *** Rest API => Member Join
	// ** Join1 : image 제외, json type 으로 요청 들어옴 
	// => 요청 Data 가 JSON 임을 확인, Java 객체로 변환해야 사용가능
	@PostMapping(value="/rsjoin1", 
				 consumes = MediaType.APPLICATION_JSON_VALUE, // "application/json", 과 동일 
				 produces = MediaType.TEXT_PLAIN_VALUE )   
	// => Mapping 시 받는 데이터를 강제를 함으로 오류상황을 줄일 수 있다.
	//    이것을 위해 사용하는것중 하나가 MediaType 이며,
	//    받는 데이터를 제한할때 consumes (위에서는 Json 임을 강제함)
	//    나가는 데이터를 제한할때 produces (위에서는 String을 Return 함을 강제함) 
	// => consumes 를 설정하면 요청 Header에 보내는 Data가 json 임을 명시해야함. 
	// => @RequestBody : Json -> Java 객체로 파싱	
	public ResponseEntity<String> rsjoin1(HttpServletRequest request, 
						  @RequestBody MemberVO vo) {
		ResponseEntity<String> result = null;
		log.info("rsJoin1 vo => "+vo);
		
		// => password 처리 
		vo.setPassword(passwordEncoder.encode(vo.getPassword()));
		int cnt = mservice.insert(vo);
		if ( cnt > 0 ) {
			// success 
			result = ResponseEntity.status(HttpStatus.OK).body("Join Success");
		} else {
			result = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Join_Fail");
		}
		
		return result;
	} // rsjoin1

	// ** Join2 : image 포함, "multipart/form-data" type 으로 요청 들어옴 
	// => consumes 속성값 변경, 매개변수의 @RequestBody 필요없음
	@PostMapping(value="/rsjoin2", 
				 consumes = MediaType.MULTIPART_FORM_DATA_VALUE, // "multipart/form-data" 와 동일 
				 produces = MediaType.TEXT_PLAIN_VALUE )   

	public ResponseEntity<String> rsjoin2(HttpServletRequest request, MemberVO vo) throws IOException {
		ResponseEntity<String> result = null;
		log.info("rsJoin1 vo => "+vo);
		
		// => uploadfilef 처리 
		String realPath = request.getRealPath("/");
		System.out.println("** realpath => " + realPath);
		
		// 2) 위의 값을 이용해서 실제저장위치 확인
		// => 개발중인지, 배포했는지 에 따라 결정
		if (realPath.contains(".eclipse.")) // 개발 중 (배포 전 : eclipse 개발환경)
			realPath = "/Users/s116/Desktop/project1/Spring02/src/main/webapp/resources/uploadImage/";
		else
			realPath += "resources/uploadImage/";

		// ** 폴더 만들기 (File 클래스활용)
		// => 위의 저장경로에 폴더가 없는 경우 (uploadImage가 없는경우) 만들어 준다
		File f1 = new File(realPath);
		if (!f1.exists())
			f1.mkdir();
		// => realPath 디렉터리가 존재하는지 검사 (uploadImage 폴더 존재 확인)
		// 존재하지 않으면 디렉토리 생성

		// ** 기본 이미지 지정하기
		String file1, file2 = "resources/uploadImage/basicman4.png";
		// ** MultipartFile
		// => 업로드한 파일에 대한 모든 정보를 가지고 있으며 이의 처리를 위한 메서드를 제공한다.
		// -> String getOriginalFilename(),
		// -> void transferTo(File destFile),
		// -> boolean isEmpty()

		MultipartFile uploadfilef = vo.getUploadfilef(); // file 의 내용및 화일명 등 전송된 정보들
		if (uploadfilef != null && !uploadfilef.isEmpty()) {
			// ** Image를 선택함 -> Image저장 ( 경로_realPath + 화일명 )
			// 1) 물리적 저장경로(file1) 에 Image 저장
			file1 = realPath + uploadfilef.getOriginalFilename(); // 저장경로 완성
			uploadfilef.transferTo(new File(file1));

			// 2) Table 저장 (file2) 준비
			file2 = "resources/uploadImage/" + uploadfilef.getOriginalFilename();
		}
		
		// => password 처리 
		vo.setPassword(passwordEncoder.encode(vo.getPassword()));
		int cnt = mservice.insert(vo);
		if ( cnt > 0 ) {
			// success 
			result = ResponseEntity.status(HttpStatus.OK).body("Join Success");
		} else {
			result = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Join_Fail");
		}
		
		return result;
	} // rsjoin2
} // class
