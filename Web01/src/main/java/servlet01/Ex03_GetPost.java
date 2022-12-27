package servlet01;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//** url 매핑 네임
//=> url 배열 형태로 복수 선언가능
//=> 그러나 프로젝트 전체 기준 중복되면 안됨 : server Start 안됨. 
//=> 한글 사용시 오류는 없으나 비추
//=> xml 로 설정가능 (web.xml 설정화일)

@WebServlet("/getpost")
//@WebServlet(urlPatterns = {"/GUGU","/GuGu","/gugu","/99","/구구"}) // 구구도 되지만 안하는것이 바람직함 매핑네임은 앞에 무조건 /붙여줘야함 
public class Ex03_GetPost extends HttpServlet {
	//** HttpServletRequest 계층도
	//=> ServletRequest (I) -> HttpServletRequest (I)  
	private static final long serialVersionUID = 1L;

	public Ex03_GetPost() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1) get 방식 요청
		// -> 쿼리 스트링으로 test
		// http://localhost:8080/web01/getpost?id=apple&name=스티브&age=22
		// -> 요청 분석 : request 객체

		// -> 한글처리
		// - request 객체에 담겨진 한글 Data 의 인코딩 값을 알려줘야함
		// - getParameter전에 해야함
		// - Tomcat(WAS) 은 Get 방식 요청에서는 "utf-8"을 default로 적용함
		// ( html문서에서 "UTF-8" 작성되었고, get 방식으로 전송되면 생략가능
		// 단, post 방식에서는 반드시 처리해야함 )

		// -> Parameter_Data 처리 & 서비스 실행
		String id = request.getParameter("id");
		String name = request.getParameter("name"); // name 이라는 parameter가 전달하는 값을 string으로 리턴
		int age = Integer.parseInt(request.getParameter("age")); // String -> integer : parseInt 래퍼클래스
		age -= 2; // age = age-2;

		// -> 실행결과 (response) 처리

		// -> 한글처리 : response
		response.setContentType("text/html; charset=UTF-8");
		// ** response ContentType 지정
		// => 웹브라우져에게 처리할 데이터의 MIME 타입을 알려줌
		// => MIME : Multipurpose Internet Mail Extensions
		// => 데이터 송.수신시 자료의 형식에 대한 정보
		// => Jsp 의 page 디렉티브의 contentType 속성값과 동일

		// -> 출력객체 생성
		PrintWriter out = response.getWriter();
		out.print("<html><body><h2 style='color : green;'>");
		out.print("** servlet get 방식 test **<br>");

		out.print("** ID : " + id + "<br>");
		out.print("** Name : " + name + "<br>");
		out.print("** age : " + age + "<br>");

		out.print("</body></html>");
	  

} // class

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");

		// -> Parameter_Data 처리 & 서비스 실행
		// 	 request.getParameter("id"); 
		// 	-> 해당하는 parameter (id)가 없으면 null 을 return 
		//	-> 단, parameter (id) 는 존재하지만 값이 없는 경우와는 구별됨 (null 값이 아님 "") 
		String id = request.getParameter("id");
		String name = request.getParameter("name"); // name 이라는 parameter가 전달하는 값을 string으로 리턴
		int age = Integer.parseInt(request.getParameter("age")); // String -> integer : parseInt 래퍼클래스
		age -= 2; // age = age-2;

		// -> 실행결과 (response) 처리

		// -> 한글처리 : response
		response.setContentType("text/html; charset=UTF-8");

		// -> 출력객체 생성
		PrintWriter out = response.getWriter();
		out.print("<html><body><h2 style='color : green;'>");
		out.print("** servlet post 방식 test **<br>");
		out.print("** ID : " + id + "<br>");
		out.print("** Name : " + name + "<br>");
		out.print("** age : " + age + "<br>");

		out.print("</body></html>");
//      doGet(request, response);
	}

} // class
