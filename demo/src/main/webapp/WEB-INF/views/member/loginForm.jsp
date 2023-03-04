<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>** SpringBoot_Mybatis LoginForm **</title>
	<link rel="stylesheet" type="text/css" href="/resources/myLib/myStyle.css">
</head>
<body>
<h2>** SpringBoot_Mybatis LoginForm **</h2>
<form action="login" method="post">
<table>
	<tr height="30"><td bgcolor="PaleTurquoise" ><label for="id">I D</label></td>
		<td><input type="text" id="id" name="id"></td>
	</tr>
	<tr height="30"><td bgcolor="PaleTurquoise" ><label for="password">Password</label></td>
		<td><input type="password" id="password" name="password"></td>
	</tr>
	<tr height="30"><td></td>
		<td><input type="submit" value="로그인">&nbsp;&nbsp;
			<input type="reset" value="취소">&nbsp;&nbsp;
			<span class="textlink" onclick="rsLogin()">rsLogin</span>&nbsp;&nbsp;
		</td>
	</tr>
</table>
</form>
<hr>
<span id="message"></span><br>
<c:if test="${not empty requestScope.message}">
=> ${requestScope.message}<br>
</c:if>
<hr>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="/home">[Home]</a>&nbsp;
</body>
</html>