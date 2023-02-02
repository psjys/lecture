package com.newlecture.web.notice;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

public class DetailController implements Controller {

	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
		ModelAndView mv = new ModelAndView();
		// 모델을 data 라는 이름으로 전달 
		mv.addObject("data", "Hello Spring MVC~");
		mv.setViewName("notice.detail");
		
		
		return mv;
	}

}
