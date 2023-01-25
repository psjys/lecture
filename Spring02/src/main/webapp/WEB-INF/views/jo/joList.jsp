<%@page import="vo.JoVO"%>
<%@page import="java.util.List"%>
<%@page import="service.JoServiceImpl"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** joList myBatis **</title>
<link rel="stylesheet" type="text/css"
	href="resources/mylib/myStyle.css">
</head>
<body>
	<h2>** joList myBatis **</h2>
	<c:if test="${not empty requestScope.message}">
		${requestScope.message}<br>
	</c:if>
	<hr>
	<table width=100%>
		<tr bgcolor="lavender">
			<th>조 번호</th>
			<th>조 이름</th>
			<th>조장</th>
			<th>note</th>
		</tr>

		<c:if test="${not empty banana}">
			<c:forEach var="s" items="${banana}">
				<tr>
					<td>${s.jno}</td>
					<td><a href="jdetail?jno=${s.jno}">${s.jname}</a>					
					
					<%-- <c:if test="${sessionScope.loginID != null}">
							<a href="jdetail?jno=${s.jno}">${s.jname}</a>
						</c:if> <c:if test="${sessionScope.loginID == null}">
			${s.name}
		</c:if> --%></td>
					<td>${s.chief}</td>
					<td>${s.note}</td>
				</tr>
			</c:forEach>
		</c:if>
		<c:if test="${empty banana}">
		** 출력할 자료가 1건도 없습니다 ** 
	</c:if>
	</table>
	<hr>
&nbsp;<a href="jinsert">새 조 등록_F</a>&nbsp;
	&nbsp;
	<a href="javascript:history.go(-1)">이전으로</a>&nbsp; &nbsp;
	<a href="home">[Home]</a>&nbsp;

</body>
</html>