package controllerB;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.BoardService;
import vo.BoardVO;

@WebServlet("/binsert")
public class C03_bInsert extends HttpServlet {
   private static final long serialVersionUID = 1L;
       
    public C03_bInsert() {
        super();
    }

   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      // 1) 요청분석 & 해당하는 Service 실행
      // => 한글처리 (post 요청시에도 현재 메서드 사용하기 때문)
      // => request의 Parameter 처리 -> set vo
      request.setCharacterEncoding("UTF-8");
      
      String title=request.getParameter("title");
      String content=request.getParameter("content");
      String regdate=request.getParameter("regdate");
      
      BoardService service = new BoardService();
      BoardVO vo = new BoardVO();
      
      vo.setId(request.getParameter("id"));
      vo.setTitle(title);
      vo.setContent(content);
      vo.setRegdate(regdate); // date 넘기기 
      vo.setCnt(0);
         
      // 2) Service 처리 (insert)
      // => 성공 : boardList
      // => 실패 : 다시 작성 -> boardInsert
      String uri="/blist" ;
      
      if(service.insert(vo)>0) {
         request.setAttribute("message", "~~ 글 등록 성공 ~~");
      } else {
         uri="board/boardInsert.jsp" ;
         request.setAttribute("message", "~~ 글 등록 실패, Data 오류! 다시 하세요 ~~");
      }
      
      
      // 3) View 로 Forward
      request.getRequestDispatcher(uri).forward(request, response);
      
   } //doGet

   protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      doGet(request, response);
   }
} //class