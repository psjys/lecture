package controllerM;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.MemberService;
import service.StudentService;
import vo.MemberVO;
import vo.StudentVO;


// ** Member Login
 
@WebServlet("/login")
public class C03_mLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public C03_mLogin() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1) 요청 분석 & 해당하는 Service 실행 
		// => Service : id 존재만 확인 -> selectOne(...)
	    //         -> id, password 오류 구분 가능
	    //         -> DAO, Service 에 메서드 추가하지 않아도 됨.
	    //         -> password 암호화 적용된 경우에도 비교 가능함.
		// => Controller : id가 존재하는 경우 DB의 password와 입력한 password 확인
		// 					(이것을 위해 입력한 password 보관) 
		MemberService service = new MemberService();
		MemberVO vo = new MemberVO();
		String id = request.getParameter("id");
		String password = request.getParameter("password");
		vo.setId(id);
		// vo.setId(request.getParameter("id")); 이렇게 넣어도됨 
		
		vo = service.selectOne(vo); // select 한 후 결과를 vo에 담아줌 
		// -> id 존재 : vo에는 모든 정보가 담겨짐
		// -> id가 존재 하지 않으면 : vo는 null 
		
		
		// 2) Service 결과 처리
		// -> 성공 - 로그인 정보 보관 후, index 페이지로
		// -> 실패 - loginForm 재로그인 유도 
		String uri = "index.jsp";
		
		if (vo != null) {
			// id 는 ok -> password 확인 (저장된 password와 입력한 password 비교) 
			if(vo.getPassword().equals(password)) {
				// 로그인 성공 
				// -> 로그인 정보 보관 후 (session의 Attribute에 보관), index 페이지로
				request.getSession().setAttribute("loginID", vo.getId());
				request.getSession().setAttribute("loginName", vo.getName());
				request.setAttribute("message", "~~ 안녕하세요 ~~");
				
			} else {
				// password 오류
				uri = "member/loginForm.jsp";
				request.setAttribute("message", "~~ Password 오류! 다시 입력 하세요 ~~");
			}
			
		} else {
			// id 오류 
			uri = "member/loginForm.jsp";
			request.setAttribute("message", "~~ ID 오류! 다시 입력 하세요 ~~");
		}
		
		
		// 3) View로 forward (결과 출력) 
		// => setAttribute , forward
		request.getRequestDispatcher(uri).forward(request, response);
		
	} // doGEt

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

} // class 
