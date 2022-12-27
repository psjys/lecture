package servlet01;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//@(애너테이션) : 자바 소스 코드에 추가하여 사용할 수 있는 메타데이터의 일종
//Ex01HelloServlet : 요청명 / 메인 없이 실행 - get요청, post요청 
@WebServlet("/hello") 
//@WebServlet("/gugu") // 매핑네임 중복 test -> Error server start 못함 
public class Ex01HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Ex01HelloServlet() {
        super();
    }
    
    // get요청이 들어오면 이거 실행 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// ** 한글 처리 
		response.setContentType("text/html; charset=UTF-8");
		
		// ** 출력문 작성 (response 객체에 html 문서를 담아줌) 
		// -> 출력 객체 생성 -> html 문서 작성  
		
		PrintWriter out = response.getWriter();
		String name = "하서연";
		out.print("<h1 style='color:green;'>*** 안녕하세요~~ ***</h1>");
		
		out.print("<html><body>");
		out.print("<h1 style='color:blue;'>*** Hello Servlet ***</h1>");
		out.print("Name : "+name+"<br>");
		out.print("<h2>*** Servlet 장점 : Java Code 처리 매우 편리</h2>");
		out.print("<h2>*** Servlet 단점 : View (HTML) 작성은 매우 불편</h2>");
		out.print("</body></html>");
		
	} // doGet

	// post 요청 들어오면 이거 실행 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	} // doPost

} // class 
