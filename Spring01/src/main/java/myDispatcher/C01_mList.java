package myDispatcher;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.MemberService;
import vo.MemberVO;

public class C01_mList implements MyController {

	@Override
	public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
		// ** MemberList
		MemberService service= new MemberService();
		List<MemberVO> list = new ArrayList<MemberVO>();
    	list = service.selectList();
    	if ( list!=null ) {
    		request.setAttribute("banana", list);
    	}else {
    		request.setAttribute("message", "~~ 출력 자료가 없습니다 ~~");
    	}
    	// 최종적으로 뷰를 리턴 
		return "/member/memberList";
	}
	
} //F05_mList 
