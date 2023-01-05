<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Web02 index **</title>
</head>
<body>
<h2>** Web02 WebApplication MVC2 **</h2>
<hr>
<c:if test="${not empty sessionScope.loginID }">
 * LoginID : ${sessionScope.loginID}, ${sessionScope.loginName} 님<br>
</c:if>
<c:if test="${not empty requestScope.message}">
 * Message : ${requestScope.message} <br>
</c:if>
<c:if test="${not empty sessionScope.message}">
 * Message : ${sessionScope.message} <br>
 <% session.removeAttribute("message"); %>
</c:if>

<hr>

<img alt="main" src="./images/snow.jpg" width="400" height="300">
<hr>
<c:if test="${not empty sessionScope.loginID}">
	<a href="/Web02/logout">Logout</a>&nbsp;&nbsp;
	<a href="/Web02/mdetail">내정보보기</a>&nbsp;&nbsp;
	<a href="/Web02/mdetail?jCode=U">내정보수정</a>&nbsp;&nbsp;
	<a href="/Web02/mdelete">회원탈퇴</a>&nbsp;&nbsp;
</c:if>
<c:if test="${empty sessionScope.loginID}">
	<a href="/Web02/member/loginForm.jsp">LoginF</a>&nbsp;&nbsp;
	<a href="/Web02/member/joinForm.jsp">JoinF</a>&nbsp;&nbsp;
</c:if>
<hr>
<a href="/Web02/slist">StudentList</a><br>
<a href="/Web02/mlist">MemberList</a><br>

</body>
</html>