package servlet02_form;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/reqinfo")
public class Ex05_RequestInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Ex05_RequestInfo() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// ** 기본 화면 출력
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.print("<html><body>");
		out.print("<h2>** Request Information **</h2>");
		out.print("<h3> -> 주요 메서드</h3>");
		out.print("<h3> 1) Request Header Names & Values</h3>");
		out.print("<h3> 2) ContextPath : 웹 애플리케이션의 최상위 경로 </h3>");
		out.print("<h3> 3) RealPath : 웹 애플리케이션의 실행 위치 </h3>");
		out.print("<h3> 4) 기타 등등 </h3>");
		out.print("<h3> => Console 창에서 확인하세요 </h3>");
		out.print("</body></html>");
		
		// ** console 출력 
		System.out.println("** 1) Request Header Names & Values **");
		Enumeration<String> hNames = request.getHeaderNames();
		while (hNames.hasMoreElements()) { // next 같은 기능 
			String hName = hNames.nextElement();
			String hValue = request.getHeader(hName);
			System.out.println(hName + "=> " + hValue);
		}
		System.out.println("** 2) ContextPath : 웹 애플리케이션의 최상위 경로 **");
		System.out.println("   => "+request.getContextPath());
		
		System.out.println("** 3) RealPath : 웹 애플리케이션의 실행 위치 **");
		System.out.println("   => "+request.getRealPath("/"));

		System.out.println("** 4) 기타 등등 **");
		System.out.println("   => RemoteAddr : "+request.getRemoteAddr());
		System.out.println("   => Method : "+request.getMethod());
		System.out.println("   => RequestURL : "+request.getRequestURL());
		System.out.println("   => RequestURI : "+request.getRequestURI());
		System.out.println("   => ServerName : "+request.getServerName());
		System.out.println("   => ServerPort : "+request.getServerPort());
		System.out.println("   => ServletPath : "+request.getServletPath());
		
	} // doGet 

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
