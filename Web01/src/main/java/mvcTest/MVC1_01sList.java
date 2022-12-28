package mvcTest;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// ** MVC 
// -> Model (DB)
// -> View : JSP 담당
// -> Controller : Servlet 담당

// ** Student List
// -> 준비 : Java에서 작성한 DBConnection, Service, DAO, VO 와 ~jar
// -> ~jar 위치: ~/WEB-INF/lib 에 붙여넣기

// -> MVC 패턴1 
//	-> View, Controller 가 하나의 파일에 구현 
//	-> Servlet 에서 요청 받고 출력까지 처리함 
 
@WebServlet("/slist")
public class MVC1_01sList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public MVC1_01sList() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1) 요청 분석 & 해당하는 Service 실행 
		StudentService service = new StudentService();
		List<StudentVO> list = service.selectList();
		
		// 2) View (결과 출력) 
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.print("<h2>*** Student List ***</h2>");
		if (list != null) {
			for(StudentVO s: list) {
				out.print("<a href='/Web01/sdetail?id="+s.getId()+"'>"+s+"</a><br>");
			//-> Detail 정보 보기 기능 추가 (a Tag 추가하기)
			//   <a href="/Web01/sdetail?id=banana">s</a>
			}
		} else {
			out.print("<h3>출력할 자료가 1건도 없습니다</h3>");
		}
		
	} // doGet

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

} // class 
