<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>** ${apple.jno}Jo Detail myBatis **</title>
<link rel="stylesheet" type="text/css" href="resource/myLib/myStyle.css">
</head>

<body>
	<h2>** ${apple.jno} Jo Detail myBatis **</h2>
	<c:if test="${not empty apple}">
		<table>
			<tr height="40">
				<td bgcolor="Khaki">jno</td>
				<td>${apple.jno}</td>
			</tr>
			<tr height="40">
				<td bgcolor="Khaki">jname</td>
				<td>${apple.jname}</td>
			</tr>
			<tr height="40">
				<td bgcolor="Khaki">chief</td>
				<td>${apple.chief}</td>
			</tr>
			<tr height="40">
				<td bgcolor="Khaki">note</td>
				<td><textarea rows="5" cols="50" readonly>${apple.note}</textarea></td>
			</tr>
		</table>
	</c:if>
	<c:if test="${not empty requestScope.message}">
		<hr>
				${requestScope.message}<br>
	</c:if>
	<hr>
			&nbsp;&nbsp;<a href="jdetail?jCode=U&jno=${apple.jno}">[수정]</a>
			&nbsp;&nbsp;<a href="jdelete?jno=${apple.jno}">[삭제]</a>
				<!-- root 추가 : 삭제시 원글삭제 or 답글삭제 확인을 위함 -->
	<hr>
	<%-- <c:if test="${not empty loginID}">
				&nbsp;&nbsp;<a
					href="/Web02/board/rinsertForm.jsp?root=${apple.root}&step=${apple.step}&indent=${apple.indent}">[답글]</a><br>
				</c:if> --%>
	&nbsp;&nbsp;<a href="jlist">JoList</a>
	&nbsp;&nbsp;<a href="javascript:history.go(-1)">이전으로</a> 
	&nbsp;&nbsp;<a href="home">[Home]</a>
</body>

</html>