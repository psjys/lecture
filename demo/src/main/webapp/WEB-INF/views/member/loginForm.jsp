<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Spring02_MVC2 LoginForm **</title>
<link rel="stylesheet" type="text/css" href="resources/myLib/myStyle.css">
<script src="resources/myLib/axTest03.js"></script>
</head>
<body>
	<h2>** Spring02_MVC2 LoginForm **</h2>
	<form action="mlogin" method="post">
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
				<td>
				<input type="submit" value="로그인">&nbsp;&nbsp; 
				<input type="reset" value="취소">
				<span class="textlink" onclick="axlogin()">axLogin</span>
				<span class="textlink" onclick="jslogin()">jsLogin</span>
				<span class="textlink" onclick="rsDetail()">axRSJoDetail</span>
				</td>
			</tr>
		</table>
	</form>
	<hr>
	<span id="message"></span><br>
	<c:if test="${not empty requestScope.message}">
		=> message : ${requestScope.message}<br> 
	</c:if>
	&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
	&nbsp;<a href="/green/home">[Home]</a>&nbsp;
	
</body>
</html>