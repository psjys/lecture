<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** GuGu JSP **</title>
</head>
<body>
<h2>** GuGu JSP **</h2>


<% // 구구단 출력하기 
	for (int i = 1; i<=9 ; i++) {
		for (int j = 2 ; j <= 9 ; j++) {
%>
	<%=j%> * <%=i %> = <%=i*j%>&nbsp; &nbsp;			
<% 		}
%>
	<br>
<%	}

%>

</body>
</html>