<%@page import="vo.BoardVO"%>
<%@page import="java.util.List"%>
<%@page import="service.BoardServiceImpl"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** BoardList Spring02_MVC2 **</title>
<link rel="stylesheet" type="text/css"
	href="resources/mylib/myStyle.css">
</head>
<body>
	<h2>** BoardList Spring02_MVC2 **</h2>
	<c:if test="${not empty requestScope.message}">
		${requestScope.message}<br>
	</c:if>
	<hr>
	<table width=100%>
		<tr bgcolor="lavender">
			<th>Seq</th>
			<th>Title</th>
			<th>I D</th>
			<th>RegDate</th>
			<th>조회수</th>
		</tr>

		<c:if test="${not empty banana}">
			<c:forEach var="s" items="${banana}">
				<tr>
					<td>${s.seq}</td>
					<td>
					<!-- 댓글 등록 후 indent 에 따른 들여쓰기 
						=> 댓글의 경우에만 들여쓰기 적용 -->
					<c:if test="${s.indent > 0}">
						<c:forEach begin="1" end="${s.indent}">
							<span>&nbsp;&nbsp;</span>
						</c:forEach>
						<span style="color:blue;">re..</span>
					</c:if>
					
					
					<!-- 로그인 한 경우에만 title 을 클릭하면 content 를 볼 수 있도록 함
							=> bdetail 을 실행함 -->
					<c:if test="${sessionScope.loginID != null}">
							<a href="bdetail?seq=${s.seq}">${s.title}</a>
						</c:if> <c:if test="${sessionScope.loginID == null}">
			${s.title}
		</c:if></td>
					<td>${s.id}</td>
					<td>${s.regdate}</td>
					<td>${s.cnt}</td>
				</tr>
			</c:forEach>
		</c:if>
		<c:if test="${empty banana}">
		** 출력할 자료가 1건도 없습니다 ** 
	</c:if>
	</table>
	<hr>
	<c:if test="${sessionScope.loginID != null}">
&nbsp;<a href="binsert">새글등록_F</a>&nbsp;
</c:if>
	&nbsp;
	<a href="javascript:history.go(-1)">이전으로</a>&nbsp; &nbsp;
	<a href="home">[Home]</a>&nbsp;

</body>
</html>