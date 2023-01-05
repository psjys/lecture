<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** MemberDetail Web02_MVC2 **</title>
</head>
<body>
<h2>** MemberDetail MVC2 **</h2>
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
&nbsp;<a href="/Web02/mdetail?jCode=U&id=${apple.id}">내정보수정</a>&nbsp;
&nbsp;<a href="/Web02/logout">Logout</a>&nbsp;
&nbsp;<a href="/Web02/mdelete">회원탈퇴</a>&nbsp;
<hr>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="/Web02/index.jsp">[Home]</a>&nbsp;
</body>
</html>