<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>** MemberDetail SpringBoot_Mybatis **</title>
	<link rel="stylesheet" type="text/css" href="/resources/myLib/myStyle.css" >
</head>
<body>
<h2>** MemberDetail SpringBoot_Mybatis **</h2>

<c:if test="${not empty apple}">
	<table>
		<tr height=40 ><th bgcolor="Khaki">I D</th><td>${apple.id}</td></tr>
		<tr height=40 ><th bgcolor="Khaki">Password</th><td>${apple.password}</td></tr>
		<tr height=40 ><th bgcolor="Khaki">Name</th><td>${apple.name}</td></tr>
		<tr height=40 ><th bgcolor="Khaki">Age</th><td>${apple.age}</td></tr>
		<tr height=40 ><th bgcolor="Khaki">Jno</th><td>${apple.jno}</td></tr>
		<tr height=40 ><th bgcolor="Khaki">Info</th><td>${apple.info}</td></tr>
		<tr height=40 ><th bgcolor="Khaki">Point</th><td>${apple.point}</td></tr>
		<tr height=40 ><th bgcolor="Khaki">BirthDay</th><td>${apple.birthday}</td></tr>
		<tr height=40 ><th bgcolor="Khaki">추천인</th><td>${apple.rid}</td></tr>
		<tr height=40 ><th bgcolor="Khaki">Image</th>
					<td><img src="/${apple.uploadfile}" width="80" height="100"></td>
		</tr>
	</table>
</c:if>
<c:if test="${empty apple}">
	<h3>** 출력할 자료가 1건도 없습니다. **</h3>
</c:if>
<hr>
&nbsp;<a href="/member/detail?jCode=U&id=${apple.id}">내정보수정</a>&nbsp;
&nbsp;<a href="/member/logout">Logout</a>&nbsp; 
<c:if test="${sessionScope.loginID=='admin'}">
	&nbsp;<a href="/member/delete?id=${apple.id}">강제탈퇴</a>&nbsp;
</c:if>
<c:if test="${sessionScope.loginID!='admin'}">
	&nbsp;<a href="/member/delete">회원탈퇴</a>&nbsp; 
</c:if>
<hr>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="/home">[Home]</a>&nbsp;
</body>
</html>