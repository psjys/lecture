package servlet03_flow;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

//** getAttribute
// -> 전달된 attribute 확인 

@WebServlet("/02geta")
public class Ex04_02getAttribute extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public Ex04_02getAttribute() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1) getAttribute 처리
		// -> request
		String rid= (String)request.getAttribute("rid"); // get할 때는 타입 캐스팅! 
		String rname =(String)request.getAttribute("rname");
		String rnum = (String)request.getAttribute("rnum");
//		int rnum= (Integer)request.getAttribute("rnum");
		// -> redirect Test 시 값이 존재하지 않기 때문에 Integer로 처리하면 오류 발생 
		
		// -> session
		HttpSession session = request.getSession();
		String sid = (String)session.getAttribute("sid");
		int snum = (Integer)session.getAttribute("snum");
		String sname = (String)session.getAttribute("sname");
		
		
		// 2) View 만들기
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.print("<h2>** 1) parameter 값 확인 **</h2>");
		out.print("<h3>** -> request 객체에 담겨있는 parameter 값이 유지되고 있는지 확인</h3>");
		out.print("<h3>ID : " + request.getParameter("id") +"</h3>");
		out.print("<h3>Name : " + request.getParameter("name") +"</h3>");
		out.print("<h3>Num : " + request.getParameter("num") +"</h3>");
		
		out.print("<h2>** 2) request.getAttribute 값 확인 **</h2>");
		out.print("<h3>rI  D : " + rid +"</h3>");
		out.print("<h3>rName : " + rname +"</h3>");
		out.print("<h3>rNum  : " + rnum +"</h3>");
		
		out.print("<h2>** 3) session.getAttribute 값 확인 **</h2>");
		out.print("<h3>sI  D : " + sid +"</h3>");
		out.print("<h3>sName : " + sname +"</h3>");
		out.print("<h3>sNum  : " + snum +"</h3>");
		
	} // doGet

} // class
