package servlet03_flow;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

//** Attribute 생성
//=> setAttribute("Attribute Name", Value_ObjectType)    
//=> 웹 환경에서 제공되는 기본객체들 (request, response, out, session ....) 중
// page, request, session, application 에 만 생성가능  
//=> removeAttribute("message") : 삭제가능

@WebServlet("/01seta")
public class Ex04_01setAttribute extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public Ex04_01setAttribute() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1) Parameter 처리
		// -> form 없이 쿼리 스트링으로 Test 
		// 	  ~~/01seta?id=banana&num=1234&name=홍길동
		String id=request.getParameter("id");
		int num=Integer.parseInt(request.getParameter("num"));
		String name = request.getParameter("name");
		System.out.println("** setAttribute Test **");
		System.out.printf("** Parameter : id=%s, name=%s, num=%d\n", id, name, num);
		
		// 2) setAttribute 로 보관하기
		// -> request 
		request.setAttribute("rid", id);
		request.setAttribute("rname", name);
		request.setAttribute("rnum", num);
		
		// -> session 
		HttpSession session = request.getSession();
		session.setAttribute("sid", id);
		session.setAttribute("sname", name);
		session.setAttribute("snum", num);
		
		// 3) 이동 후 (02geta) 보관해놓은 Attribute 확인하기 
		String uri = "02geta";
		// -> forward 
		request.getRequestDispatcher(uri).forward(request, response);
		
		// -> redirect 
		// 출력예상 : 
		//		-> forward 와 동일 / 아니다 
		// 		-> 아니다 : 1) F, 2) F, 3) T 
//		response.sendRedirect(uri);
		
	} // doGet

} // class
