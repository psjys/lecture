package controllerB;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.BoardService;
import service.MemberService;
import vo.BoardVO;
import vo.MemberVO;

@WebServlet("/blist")
public class C01_bList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public C01_bList() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BoardService service = new BoardService();
		List<BoardVO> list = service.selectList();
		
		request.setAttribute("banana", list); // 출력할 때 까지만 
		request.getRequestDispatcher("board/boardList.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
