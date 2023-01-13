package com.ncs.green;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import service.MemberService;
import vo.MemberVO;

@Controller
public class MemberController {
	// 전역으로 선언 + autowired 로 자동 주입 
	@Autowired 
	MemberService service;
	
	@RequestMapping (value="/mlistsp")
	 public ModelAndView mlist(ModelAndView mv) {
		mv.addObject("banana", service.selectList());
		mv.setViewName("/member/memberList");
		return mv;
		
	 } // mlist
	
	@RequestMapping(value = "/mdetailsp")
	public ModelAndView mdetail(ModelAndView mv, MemberVO vo) {
		// => 매핑 메서드의 매개변수로 VO를 사용하면 
		// 	  Parameter name 이 일치하는 컬럼의 값을 자동으로 할당해줌 
		// 	  즉, vo.setId(request.getParameter("id")) 자동처리
		vo=service.selectOne(vo);
		mv.addObject("apple", vo);
		mv.setViewName("/member/memberDetail");
		
		return mv;
	} // mdetail
	
	
} // class
