package servlet03_flow;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/flow02")
public class Ex02_Flow02 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Ex02_Flow02() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1. forward
		// => 웹브라우저의 주소창은 바뀌지 않으며, 요청명과 다른 결과가 실행됨
		// 요청명은 flow01 이지만 실행결과는 hello
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();

		// -> 서버내에서 hello 로 forward 하면 flow01의 화면은 브라우저에 출력되지 않음
		// Console 로 확인

		String uri = ""; 
		int i = Integer.parseInt(request.getParameter("page"));
		String send = request.getParameter("send");

//		uri = "servletTestForm/form04_Select.jsp"; // Forward Test2

		// -> Forward
//		RequestDispatcher dis = request.getRequestDispatcher(uri);
//		dis.forward(request, response);
		// 이렇게 한 줄로 쓸 수 있음
//		request.getRequestDispatcher(uri).forward(request, response);

		switch (i) {
		case 1:
			uri = "hello";
			break;
		case 2:
			uri = "gugu";
			break;
		case 3:
			uri = "/servletTestForm/form03_Check.jsp";
			break;
		case 4:
			uri = "/servletTestForm/form04_Select.jsp";
			break;
		}
		
		if (send.equals("f")) {
			request.getRequestDispatcher(uri).forward(request, response);
		} else {
			response.sendRedirect(uri);
		}
		// ** Response 처리 
//		// nullpointexception 방지 하기 위해 
//		if (request.getParameter("send").equals("f")) {
//			request.getRequestDispatcher(uri).forward(request, response);
//		} else {
//			response.sendRedirect(uri);
//		}
		// -> Redirect (재요청 처리)
		// 첫번째 요청 flow01 에서 hello 라는 요청을 다시 보내줄것을 웹브라우져에게 response 함.
		// 재요청으로 hello 가 서버로 전달되어 처리하는 방식
		// => 그러므로 웹브라우져에 표시된 요청명이 hello 로 변경됨
//		response.sendRedirect(uri);

	} // doGet

} // class
