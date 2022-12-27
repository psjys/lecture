package servlet02_form;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/adder")
public class Ex01_Adder extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Ex01_Adder() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1) request 처리 
		int num1 = Integer.parseInt(request.getParameter("num1"));
		int num2 = Integer.parseInt(request.getParameter("num2"));
		
		response.setContentType("text/html; charset=UTF-8");
		
		// 2) Service : add연산 
		
		
		// 3) View 처리 : 연산 결과 출력 
		PrintWriter out = response.getWriter();
		out.print("<html><body><h2>");
		out.print("** 덧셈 결과 **</h2><br>");
		out.print(num1+"+" + num2 +"="+ (num1+num2));
		out.print("</body></html>");
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

} // class 
