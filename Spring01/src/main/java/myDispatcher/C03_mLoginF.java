package myDispatcher;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class C03_mLoginF  implements MyController {
	@Override
	public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
		return "/member/loginForm";
	}
}
