package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// *** @RestController
// => @Controller + @ResponseBody  
// => @Controller : 스프링 MVC 의 컨트롤러  
// @ReponseBody: 컨트롤러에서 데이터를 반환하기 위해 사용.
// => 주용도는 Json 형태로 객체 데이터를 반환하는 것
// 데이터를 Response 로 제공하는 REST API를 개발할 때 주로 사용하며
// 객체를 ResponseEntity로 감싸서 반환함

@RestController
@RequestMapping("/test")
public class TestController {
	@GetMapping({"/", "/hello"})
	// => 요청 url : "http://localhost:8088/test/" or "~~:8088/test/hello"  
	public String hello() {
		return "~~Hello Spring Boot!!! ~~";
	} // hello 
	
	
} // class
