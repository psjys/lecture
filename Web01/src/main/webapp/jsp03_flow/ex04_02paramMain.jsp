<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Jsp ActionTag Param Main **</title>
<%
	request.setCharacterEncoding("UTF-8");
	String name = request.getParameter("name");
	// -> form 없이 쿼리 스트링으로 Test ~~/~~.jsp?name=홍길동 
	String menu = "짜장면";
	int price = 5000;
%>
</head>
<body>
<pre><h3>
** Jsp ActionTag Param Main **
=> Before Include Data_Value
	* name : <%=name%>
	* menu : <%=menu%>
	* price : <%=price%>
--------------------------------------
<jsp:include page="ex04_01paramSub.jsp">
	<jsp:param value="<%=menu%>" name="menu"/>
	<jsp:param value="<%=price%>" name="price"/>
	<jsp:param value="탕수육" name="special"/>
	<jsp:param value="김길동" name="name"/>
</jsp:include>
--------------------------------------
=> After Include Data_Value
	* name1 : <%=request.getParameter("name")%>
	* name2 : <%=name%>
	* menu : <%=menu%>
	* price : <%=price%>

</h3></pre>

</body>
</html>