<%@page import="vo.BoardVO"%>
<%@page import="java.util.List"%>
<%@page import="service.BoardService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** BoardList Web_MVC2 **</title>
<%
BoardService service = new BoardService();
List<BoardVO> list = service.selectList();
%>
</head>
<body>
<h2>** BoardList Web_MVC2 **</h2>
<table width=100%>
	<tr bgcolor="lavender">
		<th>Seq</th>
		<th>Title</th>
		<th>I D</th>
		<th>RegDate</th>
		<th>조회수</th>
	</tr>
	
	<c:if test="${not empty banana}">
	<c:forEach var="s" items = "${banana}">
	<tr>
		<td>${s.seq}</td>
	<!-- 로그인 했을 때 글누를 수 있게 -->
		<td>
		<c:if test="${sessionScope.loginID != null}">
			<a href="/Web02/bdetail?seq=${s.seq}">${s.title}</a>
		</c:if>
		<c:if test="${sessionScope.loginID == null}">
			${s.title}
		</c:if>
		</td>
		<td>${s.id}</td>
		<td>${s.regdate}</td>
		<td>${s.cnt}</td>
	</tr>
	</c:forEach>
	</c:if>
</table>
	<c:if test="${empty banana}">
		** 출력할 자료가 1건도 없습니다 ** 
	</c:if>
<hr>
<c:if test="${sessionScope.loginID != null}">
&nbsp;<a href="board/boardInsert.jsp">새글등록</a>&nbsp;
</c:if>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="/Web02/index.jsp">[Home]</a>&nbsp;

</body>
</html>