<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>** Spring Boot Test **</title>
	<link rel="stylesheet" type="text/css" href="/resources/myLib/myStyle.css" >
</head>
<body>
<h1>Hello Spring Boot !!!</h1>
<p>* Start_Time : ${serverTime} </p>
<hr>
<c:if test="${not empty loginID}">
=> ${loginName} 님 안녕하세요 !!! <br>
</c:if>
<c:if test="${not empty message}">
=> ${message}<br>
</c:if>
<hr>
<img alt="main" src="/resources/images/tulips.png" width="300" height="200">
<hr>
<!-- Login 전 --> 
<c:if test="${empty loginID}">
	&nbsp;<a href="/member/loginForm">LoginF</a>
	&nbsp;&nbsp;<a href="/member/joinForm">JoinF</a>
</c:if>
<!-- Login 후  -->
<c:if test="${not empty loginID}">
	&nbsp;<a href="/member/logout">Logout</a>
	&nbsp;&nbsp;<a href="/member/detail">내정보보기</a>
	&nbsp;&nbsp;<a href="/member/detail?jCode=U">내정보수정</a>
	&nbsp;&nbsp;<a href="/member/delete">회원탈퇴</a>
</c:if>
<br>
&nbsp;<a href="/member/memberList">memberList</a>&nbsp;
&nbsp;<a href="/axtestf">AjaxTest</a>&nbsp;
</body>
</html>