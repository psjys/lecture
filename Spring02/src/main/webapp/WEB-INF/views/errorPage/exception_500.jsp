<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Spring Default Exception Message 500 **</title>
<link rel="stylesheet" type="text/css" href="resources/myLib/myStyle.css">
</head>
<body>
<h3>** Spring Exception Message (500) **</h3>
<h3>서버에 문제가 발생 했습니다 ~</h3>
<h3>exception Message => ${exception.message}</h3>
<%-- <h2>exception ToString => ${exception.toString}</h2> --%>
<h2>잠시만 기다려 주세요 ~~</h2>
<br><br>
<a href="#" onclick="history.back()">[이전으로 돌아가기]</a>&nbsp;
<a href="home">[HOME]</a>
</body>
</html>