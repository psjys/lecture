package servlet02_form;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/radio")
public class Ex02_Radio extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Ex02_Radio() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String gender = request.getParameter("gender");
		String mailcheck = request.getParameter("mailcheck");
		String content = request.getParameter("content");
		
		response.setContentType("text/html; charset=UTF-8");
		
		PrintWriter out = response.getWriter();
		out.print("<html><body><h2>");
		out.print("** Radio & TextArea Test **</h2>");
		out.print("<h3>** 성별 : " + gender+"</h3>");
		
		if(mailcheck.equals("Yes")) mailcheck = "수신동의";
		else mailcheck = "수신거절"; // String 의 동일성 비교는 ==말고 equals 로 
		
//		if ( mailcheck.equals("Yes")) {
//			"수신동의";
//		} else {
//			"수신거부";
//		}
		// 이렇게 생각을 해쓴데 실행이 안돼여 왜지? ㄱ그래서 그냥 밸류값을 바꿔버리려고요 
		
		out.print("<h3>** 메일 : " +  mailcheck+"</h3>");
		out.print("<h3>** 가입인사 : " + content+"</h3><br><br>");
		out.print("<h3><a href='/web01/servletTestForm/form02_Radio.jsp'> 다시 입력하기 </a></h3>");
		out.print("</body></html>");
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
