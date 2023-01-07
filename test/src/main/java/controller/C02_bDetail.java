package controller;

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


// ** Student Detail 
 
@WebServlet("/bdetail")
public class C02_bDetail extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public C02_bDetail() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		BoardService service = new BoardService();
		BoardVO vo = new BoardVO();

		int seq = Integer.parseInt(request.getParameter("seq"));
		vo.setSeq(seq);
		
		vo = service.selectOne(vo); // select 한 후 결과를 vo에 담아줌 
		
		request.setAttribute("apple", vo);
		request.getRequestDispatcher("board/boardDetail.jsp").forward(request, response);
		
	} // doGet 

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

} // class 
