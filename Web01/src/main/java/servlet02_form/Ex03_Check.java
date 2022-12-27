package servlet02_form;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/check")
public class Ex03_Check extends HttpServlet {
   private static final long serialVersionUID = 1L;
       
 
    public Ex03_Check() {
        super();
    }


   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      request.setCharacterEncoding("UTF-8");
      
      // CheckBox 처리
      //  -> 하나의 name 에 복수개의 Value 들이 있음
      String[] gift = request.getParameterValues("gift");
      
      
      // View
      // => 선택여부를 확인하고 출력
      
      response.setContentType("text/html; charset=UTF-8");
      PrintWriter out = response.getWriter();
      
      
      out.print("<html><body>");
      out.print("<h1>** CheckBox Test **</h1>");
      
      if(gift != null && gift.length != 0) {
         // 선택
         out.print("<h2>** 당신의 선택 => </h2>");
         for (String s : gift) {
            out.print(s + "<br>");
         }
      } else {
         out.print("<h2>** 선택 항목이 없습니다</h2>");
      }
      out.print("<h2><a href='http://localhost:8080/Web01/servletTestForm/form03_Check.jsp'>다시 선택하기</a></h2>");
      out.print("</body></html>");
   
   }


   protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

      
      request.setCharacterEncoding("UTF-8");
      
//      String gender = request.getParameter("gender");
//      String mailcheck = request.getParameter("mailcheck");
//      String con =  request.getParameter("con");
//      
//      PrintWriter out = response.getWriter();
//      
////      mailcheck = (mailcheck == "Yes") ? "수신동의" : "수신거절";
//      
//      out.print("<html><body>");
//      out.print("** 회원정보 Test **<br>");
//      
//      out.print("** 성별 : " +gender + "<br>");
//      out.printf("** 메일수신여 : %s <br> ", (mailcheck == "Yes") ? "수신동의" : "수신거절");
//      out.print("** 가입인 : " +con + "<br>");
//      
//      out.print("</body></html>");
      
      
//      request.setCharacterEncoding("UTF-8");
      
            doGet(request, response);
   }

}