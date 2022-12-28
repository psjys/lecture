<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Web01 index **</title>
</head>
<body>
<h1>** Web01 index **</h1>
<h2>Hello Web Application!!!</h2>
<hr>
<% if(session.getAttribute("loginID")!=null) {
	%> *LoginID : <%=session.getAttribute("loginID")%>
 <% } 
	if ( request.getAttribute("message") != null ) { %>
		&nbsp;&nbsp;&nbsp; *Message : <%=request.getAttribute("message")%>
<%	} %>

<hr>
<a href="/Web01/hello">Hello</a><br>
<a href="/Web01/gugu">GuGu</a><br>
<a href="/Web01/servletTestForm/getPost_Ex03.html">GetPostF</a><br>
<a href="/Web01/life">LifeCycle</a><br>
<hr>
<a href="/Web01/flow01">Flow01</a><br>
<a href="/Web01/servletTestForm/flow02_TestForm.jsp">Flow02_Form</a><br>
<a href="/Web01/sessioni">SessionInfo</a><br>
<a href="/Web01/reqinfo">RequestInfo</a><br>
<a href="/Web01/01seta">setAttribute</a><br>
<hr>
<a href="/Web01/servletTestForm/flowEx05_LoginForm.jsp">LoginF</a><br>
<a href="/Web01/slist">StudentList</a><br>

</body>
</html>