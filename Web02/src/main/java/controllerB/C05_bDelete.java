package controllerB;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import service.BoardService;
import service.MemberService;
import service.StudentService;
import vo.BoardVO;
import vo.MemberVO;
import vo.StudentVO;

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
		String uri = "/Web02/blist.jsp";
		BoardService service = new BoardService();
		BoardVO vo = new BoardVO();


		// 2) Service 실행 & 결과 처리 (setAttribute)
		// => message도 session에 보관 
		vo.setSeq(Integer.parseInt(request.getParameter("seq")));
		
		if (service.delete(vo)>0) {
			// 삭제 성공 -> redirect 처리, message session 에 보관 
			request.getSession().setAttribute("message", "~~ 회원 탈퇴 성공 1개월 후 재가입 가능합니다. ~~");
		} else {
			// 오류 
			request.setAttribute("message", "~~ 회원 탈퇴 실패, 다시 하세요 ~~");
			uri = "/bdetail?seq="+vo.getSeq();
		}

		// 3) 결과 (View -> redirect 처리) 
		// => forward ( 성공, 실패 모두 index로 )
		response.sendRedirect(uri);

	} // doGet

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

} // class
