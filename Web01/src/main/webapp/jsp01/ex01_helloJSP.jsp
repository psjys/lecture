<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Hello Jsp **</title>
</head>
<body>
<h1>** Hello Jsp **</h1>
<img src="../images/christmas.png" width=400 height=300>
<h1>** 안녕 하세요~~ **</h1>
<h3>** Java Code **</h3>
<% String name="Merry Christmas !!!";
   int i = 12*25;
   // 여기는 세미콜론 꼭 찍어줘야함 
%>
<!-- 여기는 결과니까 안찍어도 됨 -->
<h3>Name : <%=name%></h3>
<h3>i 결과 : <%=i%></h3>

<h3>* Jsp 장점 : View Html 작성 매우 편리</h3>
<h3>* Jsp 단점 : Java Code 작성 매우 불편</h3>
</body>
</html>