package controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import service.BoardService;
import vo.BoardVO;

// ** Member Delete

@WebServlet("/bdelete")
public class C05_bDelete extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public C05_bDelete() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1) 요청 분석 & 해당하는 Service 실행
		// 1.1) login 정보 : session 에서 loginID 를 get
		// 1.2) 관리자 기능 : loginID=='admin' and Parameter ID 가 존재하는 경우  
		
		BoardService service = new BoardService();
		BoardVO vo = new BoardVO();
		String loginID = "";

		if (request.getSession().getAttribute("loginID") != null) {
			loginID = (String) request.getSession().getAttribute("loginID");
			
		} else {
			request.setAttribute("message", "~~ session loginID 없음. 로그인 후 이용하세요 ~~");
			request.getRequestDispatcher("index.jsp").forward(request, response);
			return; // return을 void 메서드에서 사용하면 이 위치에서 메서드 종료
		}
		// => 관리자에 의한 강제 탈퇴 확인 : 
		// 	  Parameter로 전달된 id를 삭제해야함
		if (loginID.equals("admin") && request.getParameter("id") != null) {
			vo.setId(request.getParameter("id"));
		} else {
			vo.setId(loginID);
		}
		
		System.out.println("*********** delete id => " + loginID );

		// 2) Service 실행 & 결과 처리 (setAttribute)
		// => 성공
		// 	-> 본인 탈퇴 : 반드시 session 처리 해야함
		//	-> 강제 탈퇴 : 관리자의 session 유지
		
		if (service.delete(vo)>0) {
			// 글 삭제 성공
			request.getSession().setAttribute("message", "~~ 글 삭제 성공 ~~");
		} else {
			// 오류 
			request.setAttribute("message", "~~ 글 삭제 실패 다시 시도하세요 ~~");
			
		}


		// 3) View 를 처리할 수 있도록 준비 (결과 출력)
		// => forward 
		String uri = "board/boardList.jsp";
//		request.getRequestDispatcher(uri).forward(request, response);
		response.sendRedirect(uri);

	} // doGet

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

} // class
