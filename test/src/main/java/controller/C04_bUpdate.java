package controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.BoardService;
import vo.BoardVO;

// ** Student Detail

@WebServlet("/bupdate")
public class C04_bUpdate extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public C04_bUpdate() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1) 요청분석 & 해당하는 Service 실행
		// => 한글처리 (post 요청시에도 현재 메서드 사용하기 때문)
		// => request의 Parameter 처리 -> set vo
		request.setCharacterEncoding("UTF-8");
		
	      String title=request.getParameter("title");
	      String content=request.getParameter("content");
	      String regdate=request.getParameter("regdate");

		BoardService service = new BoardService();
		BoardVO vo = new BoardVO();

		vo.setTitle(title);
		vo.setContent(content);
		vo.setRegdate(regdate);

		request.setAttribute("apple", vo);
		// -> Update 성공 / 실패 모두 출력 시 필요하므로

		// 2) Service 처리 (update)
		String uri = "board/boardDetail.jsp";

		if (service.update(vo) > 0) {
			request.setAttribute("message", "~~ 글 수정 성공 ~~");
			} else {
				uri = "board/boardUpdate.jsp";
				request.setAttribute("message", "~~ 글 수정 실패 다시 하세요 ~~");
			
		}

		// 3) View 로 Forward
		request.getRequestDispatcher(uri).forward(request, response);

	} // doGet

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
} // class