<%@page import="java.util.List"%>
<%@page import="vo.MemberVO"%>
<%@page import="service.MemberServiceImpl"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** MemberList2 Spring02_MVC2 **</title>
<link rel="stylesheet" type="text/css" href="/green/resources/myLib/myStyle.css">
</head>
<body>
<h2>** StudentList2 Spring02_MVC2 **</h2>
<table width=100% border="1px" style = "text-align:center">
	<tr bgcolor="pink">
		<th>I D</th>
		<th>P W</th>
		<th>Name</th>
		<th>Age</th>
		<th>Jno</th>
		<th>Info</th>
		<th>Point</th>
		<th>Birthday</th>
		<th>추천인</th>
		<th>Image</th>
	</tr>
	<c:if test="${not empty banana}">
		<c:forEach var="s" items="${banana}" >
		<tr>
			<td>
			 <c:if test="${sessionScope.loginID == 'admin'}">
				<a href="mdetail?id=${s.id}">${s.id}</a>
			</c:if>
			<c:if test="${sessionScope.loginID != 'admin'}">
				${s.id}
			</c:if>
			</td>
			
			<td>${s.password}</td>
			<td>${s.name}</td>
			<td>${s.age}</td>
			<td>${s.jno}</td>
			<td>${s.info}</td>
			<td>${s.point}</td>
			<td>${s.birthday}</td>
			<td>${s.rid}</td>
			<td><img alt="memberImage" src="/green/${s.uploadfile}" width=50px height=50px></td>
		</tr>
		</c:forEach>
	</c:if>
	<c:if test="${empty banana}">
		** 출력할 자료가 1건도 없습니다. **
	</c:if>
</table>
<hr>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="/green/home">[Home]</a>&nbsp;
</body>
</html>