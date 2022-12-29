<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Jsp Page Flow Test **</title>
</head>
<body>
<h2>** JSP Forward & Redirect</h2>
<form action="ex02_02flowMain.jsp" method="get">
	<label for="page">WebPage : </label>
	<select id="page" name="page" size="1">
		<option value="1">Hello_Servlet_f</option>
		<option value="2">GuGu_Servlet_r</option>
		<option value="3">Out_Jsp</option>
		<option value="4">Application_Jsp</option>
	</select><br><br>
	이동 방법 :
	<input type="radio" name="send" id="fo" value="f" checked>
	<label for="fo">Forward</label>&nbsp;&nbsp;
	<input type="radio" name="send" id="re" value="r">
	<label for="re">Redirect</label><br><br>
	<input type="submit" value="전송">&nbsp;&nbsp;
	<input type="reset" value="취소">
</form>

</body>
</html>