package mvcTest;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// ** MVC 패턴2
// => Model, View, Controller 각각 처리함
// => Servlet : 요청 받고 Service 처리함 
// => JSP : View 를 완성함
 
@WebServlet("/slist2")
public class MVC2_01sList2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public MVC2_01sList2() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1) 요청 분석 & 해당하는 Service 실행 
		StudentService service = new StudentService();
		List<StudentVO> list = service.selectList();
		
		// 2) View 를 처리할 수 있도록 준비
		// => setAttribute, forward 
		request.setAttribute("banana", list); // 출력할 때 까지만 
		request.getRequestDispatcher("jsp08_MVCTest/mvc2_05sList.jsp").forward(request, response);
		
	} // doGet

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

} // class 
