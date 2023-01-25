<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>** Jo Insert myBatis **</title>
	<link rel="stylesheet" type="text/css" href="resource/myLib/myStyle.css" >
</head>
<body>
<h2>** Jo Insert myBatis **</h2>
<form action="jinsert" method="post">
<table>
	<tr height="40">
		<td bgcolor="Linen">조 번호</td>
		<td><input type="text" name="jno"></td>
	</tr>
	<tr height="40">
		<td bgcolor="Linen">조 이름</td>
		<td><input type="text" name="jname"></td>
	</tr>
	<tr height="40">
		<td bgcolor="Linen">조장</td>
		<td><input type="text" name="chief"></td>
	</tr>
	<tr height="40">
		<td bgcolor="Linen">note</td>
		<td><textarea rows="5" cols="50" name="note"></textarea></td>
	</tr>
	<tr><td></td>
		<td><input type="submit" value="등록">&nbsp;&nbsp;
			<input type="reset" value="취소">
		</td></tr>
	</table>
</form>

<c:if test="${not empty requestScope.message}">
<hr>
 ${requestScope.message}<br>
</c:if>
<hr>
&nbsp;&nbsp;<a href="jlist">JoList</a>
&nbsp;&nbsp;<a href="javascript:history.go(-1)">이전으로</a>
&nbsp;&nbsp;<a href="home">[Home]</a>
</body>
</html>