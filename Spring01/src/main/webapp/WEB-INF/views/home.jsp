<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> <!-- session : false 면 세션 실행 안된다는 것 -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
	<meta charset="UTF-8">
	<title>Home</title>
</head>
<body>
<h1>
	Hello Spring !!!  
</h1>

<P>  The time on the server is ${serverTime}. </P>
<hr>
<a href="mlistsp">MemberListSP</a><br>
</body>
</html>
