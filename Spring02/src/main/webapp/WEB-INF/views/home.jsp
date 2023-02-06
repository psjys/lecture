<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> <!-- session : false 면 세션 실행 안된다는 것 -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
	<meta charset="UTF-8">
	<title>Home</title>
	<link rel="stylesheet" type="text/css" href="resources/myLib/myStyle.css">
	<script src="resources/myLib/jquery-3.2.1.min.js"></script>
    <script src="resources/myLib/axTest01.js"></script>
</head>
<body>
<h1>
	Hello Spring02 !!!   
</h1>

<P>  The time on the server is ${serverTime}. </P>
<hr>
<c:if test="${ not empty sessionScope.loginID }">
=> ${sessionScope.loginID}, ${sessionScope.loginName} 님 안녕하세요 !!! <br>
</c:if>
<c:if test="${not empty requestScope.message}">
=>${requestScope.message}"
</c:if>

<hr>
<img alt="home" src="resources/images/tulips.png">
<hr>
<div id="resultArea"></div>
<hr>
<!-- Login 전 --> 
<c:if test="${empty sessionScope.loginID }">
	&nbsp;<a href="mlogin">Login</a>&nbsp;
	&nbsp;<a href="mjoin">Join</a>&nbsp;
	&nbsp;<span id="axloginf" class="textlink" onclick="axloginf()">axLogin</span>&nbsp;
</c:if>
<!-- Login 후 -->
<c:if test="${not empty sessionScope.loginID }">
	&nbsp;<a href="mdetail">MyInfo</a>&nbsp;
	&nbsp;<a href="mlogout">Logout</a>&nbsp;
	&nbsp;<a href="mdelete">탈퇴</a>&nbsp;
</c:if>
<hr>
&nbsp;<a href="mlist">MemberList</a>&nbsp;
&nbsp;<a href="blist">BoardList</a>&nbsp;
&nbsp;<a href="jlist">joList</a>&nbsp;
<br>
&nbsp;<a href="bcrilist">bCriList</a>&nbsp;
&nbsp;<a href="bchecklist">bCheckList</a>&nbsp;
&nbsp;<a href="mcrilist">mCriList</a>&nbsp;
&nbsp;<a href="mchecklist">mCheckList</a>&nbsp;
<br>
&nbsp;<a href="bcrypt">BCrypt</a>&nbsp;
&nbsp;<a href="log4jTest">log4jTest</a>&nbsp;

<!-- * 계층적 uri & viewName 생략 Test * 
      -> 요청명 : green/member/list  
      -> Test Controller : MemberController2.java -->
&nbsp;<a href="member/list">MList2</a>&nbsp;
&nbsp;<a href="member/memberList2">vName 생략1</a>&nbsp;
&nbsp;<a href="member/loginForm">vName 생략2</a>&nbsp;
<br>
&nbsp;<a href="etest">Exception</a>&nbsp;
&nbsp;<a href="axtestform">AjaxTest</a>&nbsp;


</body>
</html>
