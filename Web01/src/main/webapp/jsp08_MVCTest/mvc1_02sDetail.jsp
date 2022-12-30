<%@page import="mvcTest.StudentVO"%>
<%@page import="mvcTest.StudentService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** StudentDetail MVC1_JSP **</title>
</head>
<body>
<h2>** StudentDetail MVC1_JSP **</h2>
<% 	StudentService service = new StudentService();
	StudentVO vo = new StudentVO();
	String id = request.getParameter("id");
	vo.setId(id);
	vo = service.selectOne(vo);
%>
<table border="1px solid">
	<tr>
		<th>I D</th>
		<td><%=vo.getId()%></td>
	</tr>
	<tr>
		<th>Name</th>
		<td><%=vo.getName()%></td>
	</tr>
	<tr>
		<th>Age</th>
		<td><%=vo.getAge()%></td>
	</tr>
	<tr>
		<th>Jno</th>
		<td><%=vo.getJno()%></td>
	</tr>
	<tr>
		<th>Info</th>
		<td><%=vo.getInfo()%></td>
	</tr>
	<tr>
		<th>Point</th>
		<td><%=vo.getPoint()%></td>
	</tr>
	<tr>
		<th>Birthday</th>
		<td><%=vo.getBirthday()%></td>
	</tr>
</table>


</body>
</html>