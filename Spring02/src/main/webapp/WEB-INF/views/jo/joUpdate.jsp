<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>** Board Update myBatis **</title>
	<link rel="stylesheet" type="text/css" href="resource/myLib/myStyle.css" >
</head>
<body>
<h2>** Board Update myBatis **</h2>
<hr>
<form action="jupdate" method="post">
	<table>
		<tr height="40"><td bgcolor="MistyRose">조 번호</td>
			<td><input type="text" name="jno" value="${apple.jno}" size="20" readonly></td></tr>
								<!-- 서버에서 필요한 정보 -->
		<tr height="40"><td bgcolor="MistyRose">조 이름</td>
			<td><input type="text" name="jname" value="${apple.jname}" size="20"></td>
		</tr>
		<tr height="40"><td bgcolor="MistyRose">조장</td> 
			<td><input type="text" name="chief" value="${apple.chief}"></td>
		</tr>
								<!-- 서버에서 필요한 정보 -->
		<tr height="40"><td bgcolor="MistyRose">Note</td>
			<td><textarea rows="5" cols="50" name="note">${apple.note}</textarea></td>
								<!-- 서버에서 필요한 정보 -->
		</tr>
		
		<tr><td></td>
			<td><input type="submit" value="글수정">&nbsp;&nbsp;
				<input type="reset" value="취소">
			</td>
		</tr>
	</table>
</form>	
<c:if test="${not empty requestScope.message}">
<hr>
${requestScope.message}<br>
</c:if>
<hr>
	&nbsp;&nbsp;<a href="jdelete?jno=${apple.jno}">[조 삭제]</a>
&nbsp;&nbsp;<a href="jlist">joList</a>
&nbsp;&nbsp;<a href="javascript:history.go(-1)">이전으로</a>
&nbsp;&nbsp;<a href="home">[Home]</a>
</body>
</html>