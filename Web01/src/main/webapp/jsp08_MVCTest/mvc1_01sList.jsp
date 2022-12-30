<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.util.List, mvcTest.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** StudentList MVC1_Jsp **</title>
<%
StudentService service = new StudentService();
List<StudentVO> list = service.selectList();

%>
</head>
<body>
	<h2>** StudentList MVC1_Jsp **</h2>
	<table width=100%>
		<tr bgcolor="Lime">
			<th>I D</th>
			<th>Name</th>
			<th>Age</th>
			<th>Jno</th>
			<th>Info</th>
			<th>Point</th>
			<th>Birthday</th>
		</tr>
<%
		if (list != null) {
			for (StudentVO s : list) { %>
				<tr>
					<td><a href="mvc1_02sDetail.jsp?id=<%=s.getId()%>"><%=s.getId()%></a></td>
					<td><%=s.getName()%></td>
					<td><%=s.getAge()%></td>
					<td><%=s.getJno()%></td>
					<td><%=s.getInfo()%></td>
					<td><%=s.getPoint()%></td>
					<td><%=s.getBirthday()%></td>
				</tr>
<%			} // for
		} else { %>
			<tr>
				<td colspan="7">** 출력할 자료가 1건도 없습니다. **</td>
			</tr>
<%		} // if 
%>
	</table>
</body>
</html>