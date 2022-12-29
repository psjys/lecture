<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.util.Date, java.text.SimpleDateFormat"%>

<%-- => 위 방법이 일반적으로 가장 많이 이용하는 방법
	<%@page import="java.text.SimpleDateFormat"%>
	 => JSP 주석문
--%>
<!-- Html 주석문 -->

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Jsp Object : Session Info **</title>
</head>
<body>
<%
	Date now = new Date();
// java code와 동일하게 import 가능 : page 디렉티브 
	SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
%>
<pre><h2>
	** Session Info **
	* Session ID => <%=session.getId()%>
	* 현재 시간 => <%=formatter.format(now)%>
	<% now.setTime(session.getCreationTime()); %> <!-- 세미콜론 안 붙이면 오류 -->
	* CreationTime => <%=formatter.format(now) %> <!-- 세미콜론 붙이면 오류  -->
	<% now.setTime(session.getLastAccessedTime());%>
	* LastAccessedTime => <%=formatter.format(now) %>
</h2></pre>

</body>
</html>