package controllerM;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.MemberService;
import vo.MemberVO;

// ** Student Detail

@WebServlet("/update")
public class C06_mUpdate extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public C06_mUpdate() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1) 요청분석 & 해당하는 Service 실행
		// => 한글처리 (post 요청시에도 현재 메서드 사용하기 때문)
		// => request의 Parameter 처리 -> set vo
		request.setCharacterEncoding("UTF-8");
		String password = request.getParameter("password");
		String name = request.getParameter("name");
		int age = Integer.parseInt(request.getParameter("age"));
		int jno = Integer.parseInt(request.getParameter("jno"));
		String info = request.getParameter("info");
		double point = Double.parseDouble(request.getParameter("point"));
		String birthday = request.getParameter("birthday");

		MemberService service = new MemberService();
		MemberVO vo = new MemberVO();

		vo.setId(request.getParameter("id")); // 이렇게 쓰기 가능
		vo.setPassword(password);
		vo.setName(name);
		vo.setAge(age);
		vo.setJno(jno);
		vo.setInfo(info);
		vo.setPoint(point);
		vo.setBirthday(birthday);

		request.setAttribute("apple", vo);
		// -> Update 성공 / 실패 모두 출력 시 필요하므로

		// 2) Service 처리 (update)
		String uri = "member/memberDetail.jsp";

		if (service.update(vo) > 0) {
			request.setAttribute("message", "~~ 회원정보 수정 성공 ~~");
			if (request.getSession().getAttribute("loginName") != null) {
				request.getSession().setAttribute("loginName", vo.getName());
			} else {
				uri = "member/updateForm.jsp";
				request.setAttribute("message", "~~ 회원정보 수정 실패 다시 하세요 ~~");
			}
		}

		// 3) View 로 Forward
		request.getRequestDispatcher(uri).forward(request, response);

	} // doGet

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
} // class