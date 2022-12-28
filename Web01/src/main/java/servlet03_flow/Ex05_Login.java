package servlet03_flow;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class Ex05_Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Ex05_Login() {
		super();
	}
	// ** Login
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1) request의 Parameter 처리
		// => id, password 는 한글 처리 필요 X 
		String id = request.getParameter("id");
		String password = request.getParameter("password");
		
		String uri = "index.jsp";
		
		// 2) Service 처리
		// => DB에서 id 존재 확인 
		// => id가 존재한다면 현재 코드에서 password 의 일치성을 확인 
		if ( id.equals("banana") && password.equals("12345!") ) {
			// 로그인 성공으로 가정함 
			//	-> index 화면의 위쪽에 메시지와 id 출력
			//	-> 로그인 id를 session에 보관 
			request.getSession().setAttribute("loginID", id);
			request.setAttribute("message", "로그인 성공 안녕하세요");
			
		} else {
			// 로그인 실패로 가정함 
			uri="servletTestForm/flowEx05_LoginForm.jsp";
			request.setAttribute("message", "로그인 실패 다시 입력 하세요");
		}
		
		// 3) 결과 View 처리 -> forward
		request.getRequestDispatcher(uri).forward(request, response);

	} // doGet
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);

	} // doPost

} // class
