<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** JSP Object : Request Info **</title>
</head>
<body>
<pre><h2>
** Request 객체 Information **

=> Web 어플리케이션 기본 객체(implicit object)
=> JSP에서 별도 선언 없이 사용 가능
=> request, response, out, session, 
   pageContext, application 등 9종류
* ContextPath => <%=request.getContextPath()%>
* Method => <%=request.getMethod() %>
* RequestURL => <%=request.getRequestURL() %>
* RequestURI => <%=request.getRequestURI() %>
* ServerName => <%=request.getServerName() %>
</h2></pre>

</body>
</html>