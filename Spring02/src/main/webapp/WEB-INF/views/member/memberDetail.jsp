<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** MemberDetail Spring02_MVC2 **</title>
<link rel="stylesheet" type="text/css" href="resources/myLib/myStyle.css">
</head>
<body>
<h2>** MemberDetail Spring02_MVC2 **</h2>
<c:if test="${not empty apple}">
<table border="1px solid">
	<tr height=30>
		<th bgcolor="Yellow">I D</th>
		<td>${apple.id}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">P W</th>
		<td>${apple.password}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">Name</th>
		<td>${apple.name}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">Age</th>
		<td>${apple.age}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">Jno</th>
		<td>${apple.jno}</td>
	</tr>
	<tr>
		<th bgcolor="Yellow">Info</th>
		<td>${apple.info}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">Point</th>
		<td>${apple.point}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">Birthday</th>
		<td>${apple.birthday}</td>
	</tr>
</table>
</c:if>
<c:if test="${empty apple}">
<h3>** 출력할 자료가 1건도 없습니다. **</h3>
</c:if>
<hr>
&nbsp;<a href="mdetail?jCode=U&id=${apple.id}">내정보수정</a>&nbsp;
&nbsp;<a href="logout">Logout</a>&nbsp;
<c:if test="${sessionScope.loginID == 'admin' }">
	&nbsp;<a href="mdelete?id=${apple.id}">강제탈퇴</a>&nbsp;
</c:if>
<c:if test="${sessionScope.loginID != 'admin' }">
	&nbsp;<a href="mdelete">회원탈퇴</a>&nbsp;
</c:if>
<hr>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="home">[Home]</a>&nbsp;
</body>
</html>