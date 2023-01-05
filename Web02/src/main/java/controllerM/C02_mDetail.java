package controllerM;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import service.MemberService;
import service.StudentService;
import vo.MemberVO;
import vo.StudentVO;


// ** Student Detail 
 
@WebServlet("/mdetail")
public class C02_mDetail extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public C02_mDetail() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1) 요청 분석 & 해당하는 Service 실행 
		// => 요청 1) memberList 에서 : 요청 id 
		// => 요청 2) login 후 내정보보기 : session 에서 loginID 를 get 
		// => 요청 3) Update 를 위한 요청 (parameter jCode=U 추가됨)
		// 			 -> selectOne(vo) , updateForm.jsp 로 forward 
		
		// => 그러므로 parameter 확인 후 session 의 get 처리 
		
		String id = request.getParameter("id");
		if(id==null || id.length()<1 ) {
			// ** session 정의 후 getAttribute 
			if(request.getSession().getAttribute("loginID") != null ) {
				id = (String)request.getSession().getAttribute("loginID");
			} else {
				request.setAttribute("message", "~~ session id 없음. 로그인 후 이용하세요 ~~");
				request.getRequestDispatcher("member/loginForm.jsp").forward(request, response);
				return; // return을 void 메서드에서 사용하면 이 위치에서 메서드 종료 
			}
		}
		
		// 2) Service 실행 & 결과 처리 (setAttribute) 
		MemberService service = new MemberService();
		MemberVO vo = new MemberVO();
		vo.setId(id);
		// vo.setId(request.getParameter("id")); 이렇게 넣어도됨 
		
//		vo = service.selectOne(vo); // select 한 후 결과를 vo에 담아줌 
//		request.setAttribute("apple", vo);
		
		// 위의 두 코드를 이렇게 합칠 수 있음 
		request.setAttribute("apple", service.selectOne(vo));
		
		
		// 3) View 를 처리할 수 있도록 준비 (결과 출력) 
		// => forward ( Update 요청인 경우 updateForm.jsp 로 )
		// => parameter "jCode" 는 없는 경우 null return 하며,
		//	  없는 경우가 많으므로 NullPointerException 예방에 주의
		String uri = "member/memberDetail.jsp";
		if( "U".equals(request.getParameter("jCode")) ) {
			uri="member/updateForm.jsp";
		}
		
		request.getRequestDispatcher(uri).forward(request, response);
		
	} // doGet 

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

} // class 
