<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%-- <%@ page errorPage="ex01_errorMessage.jsp" %> --%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Exception Test Main **</title>
</head>
<body>
<pre><h3>
** Exception Test Main **
=> 1) WebPage 별로 : WebPage 의 page directive 에서 정의
=> 2) 응답상태 코드(404, 500 등) : web.xml
=> 3) Exception 별로 : web.xml
	-> 2), 3) web.xml 에 설정하는 경우에는 프로젝트 전체에 적용 
	
=> 4) 에러처리의 우선 순위 : 1) -> 3) -> 2)
<hr>
1) NullPointerException : Exception Type 
* country : <%=request.getParameter("country").toUpperCase()%>
	=> Parameter에 country가 없으면 return null
	=> NullPointerException -> 500 -> 현재 page에서 대응 

2) NumberFormatException : 상태코드 500
* number: <%=Integer.parseInt(request.getParameter("country")) %>
-> 숫자 없으면 NumberFormatException 일어남 

3) ArithmeticException : Exception Type
	=> by Zero Test
	123/0 = <%=123/0%> 
	
</h3></pre>
</body>
</html>