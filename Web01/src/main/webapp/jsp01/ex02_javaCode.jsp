<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** JavaCode : Scriptlet, Expression, Declaration **</title>
</head>
<body>
	<h2>** JavaCode **</h2>
	<pre>
	1) Scriptlet : 자바 코드 
	2) Expression : 표현식
	3) Declaration : 선언부
	</pre>
	<hr>
	<%! // Declaration : 선언부 Test
		public int multiply(int a, int b) {
			return a*b;
		}
	%>
	=> multiply(a, b) Test<br>
	multiply(11, 22) = <%=multiply(11, 22)%><br><br>
	
	<% // Scriptlet : 자바코드 Test - 자바코드를 중간에 넣을 때는 계속 열고 닫고 해줘야함 ** 
		int result = multiply(11, 22) + 100;
	%>
	=> Scriptlet Test<br>
	result = <%=result%>
	
</body>
</html>