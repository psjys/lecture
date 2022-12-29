<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Include Sub **</title>
</head>
<body>
<pre><h2>
**** Include Sub **********
=> Main 의 변수확인 
<%-- <%=mainValue%> --%>
(실행 시에는 오류발생하지 않음)

=> Sub 변수 정의
<%String menu="짜장면"; %>
=> Sub 변수 출력 : <%=menu%>
**** Sub End **********

</h2></pre>

</body>
</html>