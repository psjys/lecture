package com.ncs.green;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


// ** Bean 생성하는 @
// * Java : @Component
// * Spring 세분화됨
//-> @Controller, @Service, @Repository
//	스프링 프레임웤이 역할별로 객체를 인식할 수 있도록 


//** @Controller 
//=> interface 없이도 Controller 로 인식
//=> 오버라이딩 의무가 없어짐 (메서드명, 매개변수, 리턴값 자유) 
//	- 메서드명은 handleRequest 사용안해도 됨
//	- 매개변수 다양한 정의 가능 (메서드내에서 생성할 필요 없어짐)   
//	- 리턴값은 ModelAndView 또는 String 가능함
//=> 하나의 컨트롤러에 여러개의 메서드를 작성할수있고,
//	 메서드 단위로 매핑 ( @RequestMapping )
//=> 일반적으로 Table 단위로 컨트롤러를 구현

//** @RequestMapping
//=> DefaultAnnotationHandlerMapping에서 컨트롤러를 선택할 때 대표적으로 사용하는 애노테이션. 
//=> DefaultAnnotationHandlerMapping은 클래스와 메서드에 붙은 @RequestMapping 애노테이션 정보를 결합해 최종 매핑정보를 생성한다.
//=> 기본적인 결합 방법은 클래스 레벨의 @RequestMapping을 기준으로 삼고, 
//	 메서드 레벨의 @RequestMapping으로 세분화하는 방식으로 사용된다.

//** @RequestMapping 특징
//=> url당 하나의 컨트롤러에 매핑되던 다른 핸들러 매핑과 달리 메서드 단위까지 세분화하여 적용할 수 있으며,
//url 뿐 아니라 파라미터, 헤더 등 더욱 넓은 범위를 적용할 수 있다. 
//=> 요청과 매핑메서드 1:1 mapping 
//=> value="/mlist" 
//: 이때 호출되는 메서드명과 동일하면 value 생략가능 그러나 value 생략시 404 (확인필요함)
//: 해당 메서드 내에서 mv.setViewName("...."); 을 생략하면
//  요청명을 viewName 으로 인식 즉, mv.setViewName("mlist") 으로 처리함.

//** @RequestMapping 속성
//=> value : URL 패턴 ( 와일드카드 * 사용 가능 )
// @RequestMapping(value="/post")
// @RequestMapping(value="/post.*")
// @RequestMapping(value="/post/**/comment")
// @RequestMapping(value={"/post", "/P"}) : 다중매핑 가능

//=> method 
//@RequestMapping(value="/post", method=RequestMethod.GET)
//-> url이 /post인 요청 중 GET 메서드인 경우 호출됨
//@RequestMapping(value="/post", method=RequestMethod.POST)
//-> url이 /post인 요청 중 POST 메서드인 경우 호출됨
//   GET, POST, PUT, DELETE, OPTIONS, TRACE 총 7개의 HTTP 메서드가 정의되어 있음.
//   ( 이들은 아래 @GetMapping ... 등으로도 좀더 간편하게 사용가능 )  

//=> params : 요청 파라미터와 값으로도 구분 가능함.
//@RequestMapping(value="/post", params="useYn=Y")
//-> /post?useYn=Y 일 경우 호출됨
//@RequestMapping(value="/post", params="useYn!=Y")
//->  not equal도 가능
//@RequestMapping(value="/post", parmas="useYn")
//-> 값에 상관없이 파라미터에 useYn이 있을 경우 호출됨
//@RequestMapping(value="/post", params="!useYn")
//-> 파라미터에 useYn이 없어야 호출됨

//------------------------------------------------------
//** @RequestMapping , @GetMapping , @PostMapping 차이
//=> @GetMapping
//-> @RequestMapping(method = RequestMethod.GET ...) 동일효과
//=> @PostMapping
//-> @RequestMapping(method = RequestMethod.POST ...) 동일효과
//=> @PutMapping(), @DeleteMapping()  모두 가능 

//=> 특징
//-> @RequestMapping 은 클래스레벨 적용가능 하지만, 나머지 둘은 메서드레벨 적용만 가능
//-> 여러개의 어노테이션을 조합하여 새로운 어노테이션을 생성한 것으로 내부에 @RequestMapping이 존재함. 
//   ctrl+click 으로 @GetMapping 의 소스를 확인해보면 
//      @Target(ElementType.METHOD)
//      @Retention(RetentionPolicy.RUNTIME)
//      @Documented
//      @RequestMapping(method = RequestMethod.GET)

//------------------------------------------------------
//** 매핑메서드 의 매개변수   
//=> 매개변수로 정의 하면 메서드 내에서 생성할 필요 없음
//=> request.getParameter 값  VO 에 담기 => 자동화됨 
//-> vo를 매핑 메서드의 매개변수로 선언하면 자동으로 대입됨
//-> 단, form 의 input Tag의 name과 vo의 컬럼명(setter로 찾음) 이 동일한 경우만 자동 대입됨. 
//(그러므로 컬럼명의 2번째 알파벳을 대문자로하면 혼동이 발생하여 못찾을수 있으므로 사용하지 않는다.) 

//=> Parameter처리 다른방법 : @RequestParam
//public ModelAndView plogin(ModelAndView mv,
//   @RequestParam("id")String id, @RequestParam("pw")String pw) {……   
//  
//   -> String id=request.getParameter("id") 와 동일,
//   그러나 매개변수로 VO 를 사용하는것이 가장 간편 

//=> @Param 과 비교
//-> MyBatis의 파라미터는 1개만 허용되는데 이를 해결하기 위해
//Mybatis의 SQL 문장에 다수의 파라미터를 전달할 때는 
//   전달되는 변수들에 꼭 @Param 어노테이션을 붙여줘야한다.
//-> Mybatis의 SQL구문에 email, password 두 가지를 전달해야하는경우
//   Mapper Interface 에서 변수명 앞에 @Param 을 추가한다
//이 변수들은 mapper 에서 #{ } 으로 사용가능 함.
/*      
public void deleteMember(@Param("email") String email, @Param("password") String password);

<delete id="deleteMember">
   delete from member 
   where email = #{email} and password = #{password}
</delete>

*/


//----------------------------------------------------------------
//** Model & ModelAndView **

//=> Model(interface)
//-> controller처리 후 데이터(Model) 을 담아서 반환 
//-> 구현클래스 : ConcurrentModel, ExtendedModelMap 등.
//-> 아래 home 메서드 처럼, ModelAndView 보다 심플한 코드작성 가능하므로 많이사용됨. 
//   mv.setViewName("~~~~~") 하지않고 viewName 을 return 

//=> ModelAndView (class)
//-> controller처리 후 데이터(Model) 와 viewName 을 담아서 반환
//-> Object -> ModelAndView
//-----------------------------------------------------------------

//** Logger & Locale  **

//** Logger : 현재 위치상태를 보여줘서 에러 위치를 잡을수 있게 해 줄 수 있는 코드
//=> Log4J의 핵심 구성 요소로 6개의 로그 레벨을 가지고 있으며,
//  출력하고자 하는 로그 메시지를 Appender (log4j.xml 참고) 에게 전달한다.

//=> 활용 하려면 pom.xml 에 dependency (log4j, slf4j) 추가 (되어있음),
//=> Controller에는 아래의 코드를 넣어주고,
//=> 확인이 필요한 위치에서 원하는 메세지 출력, Sysout 은 (I/O 발생으로) 성능 저하 유발
//  현재 클래스 내에서만 사용가능하도록 logger 인스턴스 선언 & 생성

//** Locale : (사건등의 현장), 다국어 지원 설정을 지원하는 클래스
//=> locale 값을 받아서 현재 설정된 언어를 알려줌 -> 한글 메시지 출력 가능
//=> jsp 의 언어설정을 받아 해당 언어에 맞게 자동으로 message가 출력 되도록 할때 사용.
//  logger.info("Welcome home! 로그 메시지 Test -> locale is {}.", locale);
//=> {} : 일종의 출력 포맷 으로 우측 ',' 뒷편 변수의 값이 표시됨.

//=> src/main/resources/log4j.xml 의 <logger> 태그에 패키지명을 동일하게 지정해야함
//=> 패턴 적용 가능
// https://blog.naver.com/deersoul6662/222024554482
// https://to-dy.tistory.com/20 (종합 )

//** Log4J : Log for Java(Apache Open Source Log Library)의 준말
//=> 자바기반 로깅 유틸리티로 디버깅용 도구로 주로 사용됨.
// 로그를 남기는 가장 쉬운 방법은 System.out.println("로그 메세지")이지만
// 프로그램 개발 완료 후 불필요한 구문은 삭제해야 하며 성능 저하 요인이 됨.
// Log4J 라이브러리는 멀티스레드 환경에서도 성능에 전혀 영향을 미치지 않으면서
// 안전하게 로그를 기록할 수 있는 환경을 제공함.

//=> 로깅레벨 단계
// TRACE > DEBUG > INFO > WARN > ERROR > FATAL(치명적인)
// TRACE: Debug보다 좀더 상세한 정보를 나타냄
// DEBUG: 애플리케이션의 내부 실행 상황을 추적하기 위한 상세 정보 출력
//       ( Mybatis 의 SQL Log 확인 가능 )
// INFO : 상태변경과 같은 주요 실행 정보 메시지를 나타냄
// WARN : 잠재적인 위험(에러)를 안고 있는 상태일 때 출력 (경고성 메시지)
// ERROR: 오류가 발생했지만, 애플리케이션은 계속 실행할 수 있을 때 출력
// FATAL: 애플리케이션을 중지해야 할 심각한 에러가 발생 했을 때 출력

//=> log4j.xml 의 root Tag 에서 출력 level 조정
//=> <root> <priority value 값 >
// -> 이 값을 warn (default) , error, debug, trace
//    변경하면서 Spring 이 출력하는 Console Message 를 비교해 본다.
// -> 차이점
//    : info, warn, error -> INFO, WARN, ERROR
//    : debug -> 위에 DEBUG 추가
//    : trace -> 위에 TRACE 추가
//=> 실제는 DEBUG, WARN 이 주로 이용됨.

//----------------------------------------------------------------
//** 로깅레벨 조정 Test (log4j.xml 의)
//=> root Tag 에서 출력 level 조정 (system 오류 level조정) 
//    <root> <priority value 값 >
//=> <logger name="com.ncs.green"> 에서 출력 level 조정
//   <level value="DEBUG" />
//=> 이 두곳의 값을 warn (default) , error, debug, trace

//=> DEBUG Level 에서 Mybatis SQL구문 오류 메시지
// 아래와 같이 SQL 구문에 전달된 값을 정확하게 확인 할 수 있다. 
// DEBUG: mapperInterface.MemberMapper.insert - 
//         ==>  Preparing: insert into member values(?,?,?, ?,?,?,?,?,?) 
// DEBUG: mapperInterface.MemberMapper.insert - 
//         ==> Parameters: apple(String), 12345!(String), 가나다(String), 
//          열심히 하겠습니다!!!(String), 2022-11-17(String), 9(Integer), 22(Integer),
//         1000.55(Double), resources/uploadImage/adv.gif(String)
//----------------------------------------------------------------


@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = {"/","/home"}, method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		// ** Logger Message Test 
		// 1) {} 활용 
		logger.info("** Test1) 안녕하세요~~");
		logger.info("** Test2) 안녕하세요~~ {}님 !!","홍길동");
		
		String name = "김길동"; int age = 22;
		logger.info("** Test3) 안녕하세요~~ "+name+", "+age+"세");
		logger.info("** Test4) 안녕하세요~~ {}님, {}세 입니다.",name, age);
		
		// 2) 로깅 레벨 조정 Test 
		logger.warn("** 로깅레벨 warn, name = {} ", name);
		logger.error("** 로깅레벨 error, name = {} ", name);
		logger.debug("** 로깅레벨 debug, name = {} ", name);
		logger.trace("** 로깅레벨 trace, name = {} ", name);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	} // home 
	
	@RequestMapping(value = "/bcrypt", method = RequestMethod.GET)
	public ModelAndView bcrypt(ModelAndView mv) {
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String password = "12345!"; // rawData
		
		// 1) Encode(rawData) 
		// => 동일 rawData 에 대해 각기 다른 결과물 (digest)이 생성됨을 확인 
		String digest1 = passwordEncoder.encode(password); // 다이제스트가 만들어짐 
		String digest2 = passwordEncoder.encode(password); // 다이제스트가 만들어짐 
		String digest3 = passwordEncoder.encode(password); // 다이제스트가 만들어짐 
		String digest4 = passwordEncoder.encode("567890!@"); // 다이제스트가 만들어짐 
		String digest5 = passwordEncoder.encode("abcdef$%"); // 다이제스트가 만들어짐 
		
		System.out.println("** digest1 =>" +digest1);
		System.out.println("** digest2 =>" +digest2);
		System.out.println("** digest3 =>" +digest3);
		System.out.println("** digest4 =>" +digest4);
		System.out.println("** digest5 =>" +digest5);
		
		// 2) matches (rawData, digest) 
		System.out.println("** digest1 matches =>" +passwordEncoder.matches(password, digest1));
		System.out.println("** digest2 matches =>" +passwordEncoder.matches(password, digest2));
		System.out.println("** digest3 matches =>" +passwordEncoder.matches(password, digest3));
		System.out.println("** digest4 matches =>" +passwordEncoder.matches("567890!@", digest4));
		System.out.println("** digest5 matches =>" +passwordEncoder.matches("abcdef$%", digest5));
		System.out.println("** 교차 matches =>" +passwordEncoder.matches(password, digest5));
		
		
		mv.setViewName("redirect:home");
		return mv;
		
	} // bcrypt
	
	// ** Exception Test
	@GetMapping("/etest")
	public String etest(HttpServletRequest request) {
		
	   // ** Test1) Web의 Exception 처리  
	   // => WebPage 별, ExceptionType 별, 응답상태코드 별 
	   // => web.xml
	   //   : Exception Type 은 전달되어 해당하는 jsp는 실행되지만, 
	   //   : page 디렉티브의 isErrorPage="true" 와 무관하게 ~.jsp 에 ${exception.message} 전달안됨. 
	      
	   // ** Test2) Spring exceptionResolver 적용  
	   // => servlet~~~.xml 에 설정
	   // => page 디렉티브의 isErrorPage="true" 와 무관하게 ~.jsp 에 ${exception.message} 전달됨. 
	   //    그러나 Spring exceptionResolver 가 오류 메시지를 받아 처리하므로 
	   //    console 에는 Exception Message가 출력(전달) 되지않는다.
	   //    ( DEBUG level Message 는 출력됨. ) 
	      
	   // 1) ArithmeticException 
	   // => ArithmeticException -> 500
		int i = 100/0; // 정수 : by Zero
		logger.info("** ArithmeticException => "+i);
		
		// => 실수형 연산에서는 by Zero 에러 없음 
		// -> 그러므로 실수형의 Zero 연산 확인은
		//	  if (Double.isInfinite(d)) ~ ~ , if (Double.isNaN(p)) ~~~  
		// 실수의 0과 100은 0, 100과 가장 가까운 수로 표현되는 것
	    double d=100.0/0.0; // Infinity, 무한 수 
	    double p=100.0%0.0; // NaN , (Not a Number)
	    if (Double.isInfinite(d)) d=1;
	    if (Double.isNaN(p)) p=0;
	    
	    logger.info("** ArithmeticException 실수1 => "+d);
	    logger.info("** ArithmeticException 실수2 => "+p);
	    
	    
	   // 2) NumberFormatException (Java, web.xml)  or IllegalArgumentException (Spring)
	   String s = "12345";
	   i+=Integer.parseInt(s);
	   if (Integer.parseInt(s)>0) i=100;
	   logger.info("** IllegalArgumentException => " + i);
	   
	   // 3) NullPointerException
	   s = request.getParameter("name"); // name 이라는 Parameter가 존재하지 않으면 null 을 return 
	   if (s.equals("홍길동")) s="Yes";
	   else s="No";
	      
	   // 4) ArrayIndexOutOfBoundsException
	   // => <props> 에 정의 안됨 : defaultErrorView Test 
	   String[] menu = {"스테이크", "짜장", "짬뽕"};
	   logger.info("** ArrayIndexOutOfBoundsException =>" + menu);
	   
	   
	   // 5) SQL Test : Transaction 과 함께
		
		return "home";
	} // etest
	
} // class
