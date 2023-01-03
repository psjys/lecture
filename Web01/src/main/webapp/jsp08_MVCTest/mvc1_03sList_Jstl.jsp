<%@page import="servlet03_flow.Ex04_01setAttribute"%>
<%@page import="java.util.List, mvcTest.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** StudentList MVC1_JSTL, EL **</title>
<%
StudentService service = new StudentService();
List<StudentVO> list = service.selectList();
pageContext.setAttribute("slist",list);
%>
</head>
<body>
<h2>** StudentList MVC1_JSTL, EL **</h2>
<table width=100%>
	<tr bgcolor="Lavender">
		<th>I D</th>
		<th>Name</th>
		<th>Age</th>
		<th>Jno</th>
		<th>Info</th>
		<th>Point</th>
		<th>Birthday</th>
	</tr>
	<c:if test="${not empty slist}">
		<c:forEach var="s" items="${slist}" >
		<tr>
			<td><a href="mvc1_04sDetail_Jstl.jsp?id=${s.id}">${s.id}</a></td>
			<td>${s.name}</td>
			<td>${s.age}</td>
			<td>${s.jno}</td>
			<td>${s.info}</td>
			<td>${s.point}</td>
			<td>${s.birthday}</td>
		</tr>
		</c:forEach>
	</c:if>
	<c:if test="${empty slist}">
		** 출력할 자료가 1건도 없습니다. **
	</c:if>
</table>
</body>
</html>