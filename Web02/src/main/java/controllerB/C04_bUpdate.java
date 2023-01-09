package controllerB;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.BoardService;
import service.MemberService;
import vo.BoardVO;
import vo.MemberVO;

// ** Student Detail

@WebServlet("/bupdate")
public class C04_bUpdate extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public C04_bUpdate() {
		super();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1. 요청분석
    	// => Service 준비
		// => request, 한글처리
		//    한글처리 (utf-8 이면 get 방식은 안해도 되지만, post 방식은 반드시 해야함_getParameter 하기전에)
		// 	  Parameter -> vo 에 set
		BoardService service = new BoardService();
		BoardVO vo = new BoardVO();
		request.setCharacterEncoding("UTF-8");
		String uri = "board/boardDetail.jsp";
		
		// 수정 후 결과 View 출력시 사용하기 위해 
		// 수정하지 않는 값들도 전달받아서 setAttribute  
		vo.setSeq(Integer.parseInt(request.getParameter("seq")));
		vo.setId(request.getParameter("id"));
	    vo.setTitle(request.getParameter("title"));
	    vo.setContent(request.getParameter("content"));
	    vo.setRegdate(request.getParameter("regdate"));
	    vo.setCnt(Integer.parseInt(request.getParameter("cnt")));

		request.setAttribute("apple", vo);

		
		// 2) Service 처리 (update)
		if (service.update(vo) > 0) {
			// update 성공 : boardDetail.jsp 
			request.setAttribute("message", "~~ 글 수정 성공 ~~");
			
			} else {
				// update 실패 : boardUpdate.jsp
				uri = "board/boardUpdate.jsp";
				request.setAttribute("message", "~~ 글 수정 실패 다시 하세요 ~~");
		}

		// 3) 결과처리 : View 로 Forward
		request.getRequestDispatcher(uri).forward(request, response);
	} // doPost 

} // class