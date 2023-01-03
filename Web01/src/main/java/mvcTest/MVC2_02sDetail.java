package mvcTest;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


// ** Student Detail 
 
@WebServlet("/sdetail2")
public class MVC2_02sDetail extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public MVC2_02sDetail() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1) 요청 분석 & 해당하는 Service 실행 
		StudentService service = new StudentService();
		StudentVO vo = new StudentVO();
		String id = request.getParameter("id");
		vo.setId(id);
		// vo.setId(request.getParameter("id")); 이렇게 넣어도됨 
		
		vo = service.selectOne(vo); // select 한 후 결과를 vo에 담아줌 
		
		// 2) View (결과 출력) 
		// => setAttribute , forward
		request.setAttribute("apple", vo);
		request.getRequestDispatcher("jsp08_MVCTest/mvc2_06sDetail.jsp").forward(request, response);
		
	} // doGEt

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

} // class 
