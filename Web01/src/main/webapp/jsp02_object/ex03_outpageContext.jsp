<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.Date" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Jsp Object : out, pageContext **</title>
</head>
<body>
<pre><h2>
** out 객체 
=> Jsp 문서의 출력 3종류 
	1) html 컨텐츠 
	2) Java 의 표현식
		-> 지금은 <%=new Date()%>
	3) Java 의 out 객체 
		-> <% out.print("~~ out 객체 출력 ~~"); %> <!-- 자바 문법이 들어가면 세미콜론 찍어야함 -->

<hr>
** pageContext 객체 
=> JSP 페이지에 대한 정보를 저장한다.
=> 기본 객체를 return 하는 메서드를 제공.
	-> request 객체와 메서드가 return 하는 객체의 동일성 비교 
<%
	HttpServletRequest req = (HttpServletRequest) pageContext.getRequest();
	// 계층구조,, 이거 뭘까 
%>
	-> 비교 결과 : <%=request==req%>
	-> pageContext 객체가 제공하는 out 객체로 출력하기 
<%
	pageContext.getOut().print("~~ pageContext 객체가 제공하는 out 객체로 출력 ~~");
%>

</h2></pre>

</body>
</html>