<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** BoardDetail Web_MVC2 **</title>
</head>
<body>
<h2>** BoardDetail Web_MVC2 **</h2>
<c:if test="${not empty apple}">
<table>
	<tr>
		<th bgcolor="lavender">Seq</th>
		<td>${apple.seq}</td>
	</tr>
	<tr>
		<th bgcolor="lavender">Title</th>
		<td>${apple.title}</td>
	</tr>
	<tr>
		<th bgcolor="lavender">I D</th>
		<td>${apple.id}</td>
	</tr>
	<tr>
		<th bgcolor="lavender">작성일</th>
		<td>${apple.regdate}</td>
	</tr>
	<tr>
		<th bgcolor="lavender">조회수</th>
		<td>${apple.cnt}</td>
	</tr>
	<tr>
		<th bgcolor="lavender">Contents</th>
		<td><textarea rows="10" readonly>${apple.content}</textarea></td>
	</tr>
</table>
</c:if>
<c:if test="${empty apple}">출력할 자료가 없습니다</c:if>
<hr>
<c:if test="${sessionScope.loginID == apple.id}">
&nbsp;<a href="board/boardUpdate.jsp">수정하기</a>&nbsp;
</c:if>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="/Web02/index.jsp">[Home]</a>&nbsp;
</body>
</html>