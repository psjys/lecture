package controllerF;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.MemberService;
import vo.MemberVO;

public class F07_mLogin implements F04_Controller {
	
	@Override
	public String doUser(HttpServletRequest request, HttpServletResponse response) {
		// 1) request 처리
		String id = request.getParameter("id");
		String password = request.getParameter("password");
		MemberService service = new MemberService();
		MemberVO vo = new MemberVO();
		String uri = "/member/loginForm.jsp";
		
		// 2) service 처리
		vo.setId(id);
		vo = service.selectOne(vo);
		if ( vo != null ) { 
			// ID 는 일치 -> Password 확인
			if ( vo.getPassword().equals(password) ) {
				// Login 성공 -> login 정보 session에 보관, home
				request.getSession().setAttribute("loginID", id);
				request.getSession().setAttribute("loginName", vo.getName());
				uri="/index.jsp" ;
			}else {
				// Password 오류
				request.setAttribute("message", "~~ Password 오류,  다시 하세요 ~~");
			}
		}else {	// ID 오류
			request.setAttribute("message", "~~ ID 오류,  다시 하세요 ~~");
		} //else
		
		return uri;
	} //doUser 

} //class
