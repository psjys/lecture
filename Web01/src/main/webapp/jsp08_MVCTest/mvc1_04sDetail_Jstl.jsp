<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="mvcTest.*"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** StudentDetail MVC1_JSTL, EL **</title>
<% 	
	StudentService service = new StudentService();
	StudentVO vo = new StudentVO();
	String id = request.getParameter("id");
	vo.setId(id); 
	vo = service.selectOne(vo);
	pageContext.setAttribute("vo", vo);
%>
</head>
<body>
<h2>** StudentDetail MVC1_JSTL, EL **</h2>
<c:if test="${not empty vo}">
<table border="1px solid">
	<tr height=30>
		<th bgcolor="Yellow">I D</th>
		<td>${vo.id}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">Name</th>
		<td>${vo.name}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">Age</th>
		<td>${vo.age}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">Jno</th>
		<td>${vo.jno}</td>
	</tr>
	<tr>
		<th bgcolor="Yellow">Info</th>
		<td>${vo.info}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">Point</th>
		<td>${vo.point}</td>
	</tr>
	<tr height=30>
		<th bgcolor="Yellow">Birthday</th>
		<td>${vo.birthday}</td>
	</tr>
</table>
</c:if>
</body>
</html>