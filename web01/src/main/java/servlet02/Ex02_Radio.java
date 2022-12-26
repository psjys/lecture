package servlet02;

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
		out.print("<h3>** 메일 : " + mailcheck+"</h3>");
		out.print("<h3>** 인사 : " + content+"</h3><br><br>");
		out.print("<a href='/web01/servletTestForm/form02_Radio.jsp'> 다시 입력하기 </a>");
		out.print("</body></html>");
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
