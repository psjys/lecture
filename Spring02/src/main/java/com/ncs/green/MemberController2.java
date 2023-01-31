package com.ncs.green;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import lombok.extern.log4j.Log4j;
import service.MemberService;

@RequestMapping(value="/member") // "/member" 로 시작하는 모든 요청을 처리함.
@Log4j
@Controller
public class MemberController2 {
	@Autowired
	MemberService service;
	
	// Test1) 클래스 레벨 매핑 
	// => 상위 레벨 "/member"는 클래스 레벨에서 처리됨
	@RequestMapping(value="/list", method=RequestMethod.GET)
	public ModelAndView list(ModelAndView mv) {
		
		log.info("** Test1) 클래스 레벨 매핑 **");
		mv.addObject("banana", service.selectList());
		mv.setViewName("member/memberList2");
		
		return mv;
	} // list
	
	// Test2) ViewName 생략
	// => view 를 지정하지 않은경우 요청명.jsp 를 찾는다
	//    단, 폴더 위치를 지정하려면 요청명도 동일한 규칙으로 계층적으로 설계한다. ( member/memberList2 )
	// => 아래 "/loginFormTest" 의 경우처럼 굳이 view 에 전달할 정보가 없다면 
	//    setviewName 생략하고 return void 가능함.  
	
	//@RequestMapping(value="/memberList2", method=RequestMethod.GET)
	@GetMapping(value="/memberList2")
	public ModelAndView memberList2(ModelAndView mv) {
		
		log.info("** Test2) ViewName 생략 **");
		mv.addObject("banana", service.selectList());
		// mv.setViewName("member/memberList2");
		
		return mv;
		
	} // memberList2
	
	// Test3) ViewName 생략, void 
	// => 요청명과 동일한 “member/loginFormTest.jsp” 를 찾음
	//@RequestMapping(value="/loginForm", method=RequestMethod.GET)
	@GetMapping(value="/loginForm")
	public void loginForm(ModelAndView mv) {
		
		log.info("** Test3) ViewName 생략, void **");
		
	} // memberList2
	
} // class
