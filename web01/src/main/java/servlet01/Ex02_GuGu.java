package servlet01;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//** url 매핑 네임
//=> url 배열 형태로 복수 선언가능
//=> 그러나 프로젝트 전체 기준 중복되면 안됨 : server Start 안됨. 
//=> 한글 사용시 오류는 없으나 비추
//=> xml 로 설정가능 (web.xml 설정화일)

//@WebServlet("/GuGu")
//@WebServlet(urlPatterns = {"/GUGU","/GuGu","/gugu","/99","/구구"}) // 구구도 되지만 안하는것이 바람직함 매핑네임은 앞에 무조건 /붙여줘야함 
public class Ex02_GuGu extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Ex02_GuGu() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// ** 구구단 2~9단 
		// -> 한글처리
		response.setContentType("text/html; charset=UTF-8");
		// -> 출력객체 생성
		PrintWriter out = response.getWriter();
		out.print("<html><body><h2 style='color : purple;'>");
		out.print("** 구구단 servlet **</h2>");
		
		
		for (int i = 1; i<10 ; i++) {
//			out.print("<br>" + j + "단<br>");
			for (int j = 2 ; j < 10 ; j++) {				
				if (i*j / 10 < 1) {
					out.print(j +"x"+ i +"=" + i*j + "&nbsp; &nbsp;");					
				} else {
					out.print(j +"x"+ i +"="+ i*j + " ");
				}
			}
			out.print("<br>");
		}
		out.print("</body></html>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response); // 어떤 요청이 들어와도 실행되게 하고 싶을 때 
	}

} // class 
