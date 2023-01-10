<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Web02_MVC2 LoginForm **</title>
</head>
<body>
	<h2>** Web02_MVC2 LoginForm **</h2>
	<form action="/Web02/login" method="post">
		<table>
			<tr height="30">
				<td bgcolor="Aquamarine"><label for="id">I D</label></td>
				<td><input type="text" id="id" name="id"></td>
			</tr>
			<tr height="30">
				<td bgcolor="Aquamarine"><label for="id">Password</label></td>
				<td><input type="password" id="password" name="password"></td>
			</tr>
			<tr height="30">
				<td></td>
				<td><input type="submit" value="로그인">&nbsp;&nbsp; <input
					type="reset" value="취소"></td>
			</tr>
		</table>
	</form>
	<hr>
	<c:if test="${not empty requestScope.message}">
		=> message : ${requestScope.message}<br> 
	</c:if>
	
</body>
</html>