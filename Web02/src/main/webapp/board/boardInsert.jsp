<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** BoardInsert Web_MVC2 **</title>
</head>
<body>
	<h2>** BoardInsert Web_MVC2 **</h2>
	<form action="/Web02/binsert" method="post">
		<table>
			<tr>
				<th bgcolor="lavender">Title</th> 
				<td><input type="text" name="title" size="20" 
					></td>
			</tr>
			<tr>
				<th bgcolor="lavender">I D</th>
				<td><input type="text" name="id" size="20" value="${sessionScope.loginID}" readonly
					></td>
			</tr>
			<tr>
				<th bgcolor="lavender">Contents</th>
				<td><textarea rows="10" name="content"></textarea></td>
			</tr>
			<tr height="40">
				<td></td>
				<td><input type="submit" value="등록">&nbsp;&nbsp;&nbsp;
					<input type="reset" value="취소"></td>
			</tr>
		</table>
	</form>
	<hr>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="/Web02/index.jsp">[Home]</a>&nbsp;
</body>
</html>