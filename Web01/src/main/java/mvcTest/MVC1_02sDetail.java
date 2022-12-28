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
 
@WebServlet("/sdetail")
public class MVC1_02sDetail extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public MVC1_02sDetail() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1) 요청 분석 & 해당하는 Service 실행 
		StudentService service = new StudentService();
		StudentVO vo = new StudentVO();
		String id = request.getParameter("id");
		vo.setId(id);
		
		vo = service.selectOne(vo); // select 한 후 결과를 vo에 담아줌 
		
		// 2) View (결과 출력) 
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.print("<h2>*** Student Detail ***</h2>");
		if (vo != null) {
			// 출력 
			out.print("<h3> I D : " + vo.getId() + "</h3>");
			out.print("<h3> Name : " + vo.getName() + "</h3>");
			out.print("<h3> Age : " + vo.getAge() + "</h3>");
			out.print("<h3> Jno : " + vo.getJno() + "</h3>");
			out.print("<h3> Info : " + vo.getInfo() + "</h3>");
			out.print("<h3> Point : " + vo.getPoint() + "</h3>");
			out.print("<h3> BirthDay : " + vo.getBirthday() + "</h3>");
		} else {
			out.print("<h3>** 출력할 자료가 없습니다. **</h3>");
		}
		out.print("<br><br><h2><a href='javascript:history.go(-1)'>다시 선택하기</h2><br>");
	} // doGEt

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

} // class 
