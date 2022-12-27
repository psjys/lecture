package servlet02_form;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/select")
public class Ex04_Select extends HttpServlet {
   private static final long serialVersionUID = 1L;
       
 
    public Ex04_Select() {
        super();
    }


   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      request.setCharacterEncoding("UTF-8");
      
      // CheckBox 처리
      //  -> 하나의 name 에 복수개의 Value 들이 있음
      String job = request.getParameter("job");
      String[] interest = request.getParameterValues("interest");
      
      
      // View
      // => 선택여부를 확인하고 출력
      // 	선택하지 않아도 parameter job 은 존재, 그러나 value는 없음 (select Tag 확인) 
      
      response.setContentType("text/html; charset=UTF-8");
      PrintWriter out = response.getWriter();
      
      
      out.print("<html><body>");
      out.print("<h1>** CheckBox Test **</h1>");
      
      if(job != null && job.length()>0) {
    	  out.print("<h2>** 직업 :  "+ job + "</h2>");
      } else {
    	  out.print("당신은 직업을 선택하지 않았습니다");
      }
      
      // 아무것도 선택하지 않으면 Parameter 가 없음 (null return)
      // 이 경우에는 !=null 만 비교해도 가능함 
      out.print("<h2>** 관심분야 :  </h2>");
      if(interest != null && interest.length > 0) {
         // 선택
         for (String s : interest) {
            out.print(s + "<br>");
         }
      } else {
         out.print("<h2>** 관심분야 :</h2>");
         out.print("없음");
      }
      out.print("<h2><a href='http://localhost:8080/Web01/servletTestForm/form04_Select.jsp'>다시 선택하기</a></h2>");
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