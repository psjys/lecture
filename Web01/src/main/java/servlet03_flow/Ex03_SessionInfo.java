package servlet03_flow;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/sessioni")
public class Ex03_SessionInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Ex03_SessionInfo() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1. Session 생성
		// => 클라이언트가 접속함과 동시에 서버에서 자동생성됨
		// => 이 값을 코드내에서 사용하기 위해 전달받음
		HttpSession session = request.getSession();

		// 2. Session info 출력
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date now = new Date();

		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.print("<h2>** Session Info **</h2>");
		out.print("<h3>** Session ID => " + session.getId() + "</h3>");
		out.print("<h3>** 현재시간 => " + formatter.format(now) + "</h3>");
		// -> Session 생성시간
		now.setTime(session.getCreationTime());
		out.print("<h3>** Session 생성시간 => " + formatter.format(now) + "</h3>");
		// -> 마지막 접근 시간
		now.setTime(session.getLastAccessedTime());
		out.print("<h3>** LastAccessedTime -> " + formatter.format(now) + "</h3>");

		// 3. Session 시간 제한
		// => 유효시간 설정 (초단위, 1시간 60*60 )
		// => 확인: 10초 후 새로고침 버튼 누르면, session_id 와 모두 변경됨
		// => 설정화일 (web.xml) 에서도 설정 가능
		// Tag session-config 의 subTag session-timeout
		session.setMaxInactiveInterval(10); // 10초

		// 4. Session 종료 (삭제)
		// if (equest.getParameter("jCode").equals("D")) {
		// nullpointerException 예방 하기 위해 이렇게 작성
		if ("D".equals(request.getParameter("jCode"))) {
			session.invalidate(); // Session 무효화
			// ** invalidate : 무효화
			// => 세션객체 자체를 소멸시키는것이 아니라, 세션을 초기화하고 무효화 시킴.
			// session 이 null 이 아니고 session = ""

			System.out.println("** Session 삭제됨 **");
		} else {
			System.out.println("** Session 삭제 요청 없음 **");
		}

		out.print("<h2>** Session Info 정상종료 **</h2>");

	} // doGet

} // class
