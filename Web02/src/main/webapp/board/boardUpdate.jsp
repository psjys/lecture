<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** MemberUpdate Web02_MVC2 **</title>
</head>
<body>
<h2>** MemberUpdate Web02_MVC2 **</h2>
	<form action="/Web02/bupdate" method="post">
		<table>
			<tr>
				<th bgcolor="lavender">Seq</th>
				<td><input type="text" name="id" size="20" value="${apple.seq}"
					readOnly></td>
			</tr>
			<tr>
				<th bgcolor="lavender">Title</th>
				<td><input type="text" name="id" size="20"
					value="${apple.title}"></td>
			</tr>
			<tr>
				<th bgcolor="lavender">I D</th>
				<td><input type="text" name="id" size="20" value="${apple.id}"
					readOnly></td>
			</tr>
			<tr>
				<th bgcolor="lavender">작성일</th>
				<td><input type="text" name="id" size="20"
					value="${apple.regdate}" readOnly></td>
			</tr>
			<tr>
				<th bgcolor="lavender">조회수</th>
				<td><input type="text" name="id" size="20" value="${apple.cnt}"
					readOnly></td>
			</tr>
			<tr>
				<th bgcolor="lavender">Contents</th>
				<td><textarea rows="10"></textarea>${apple.content}</td>
			</tr>
			<tr height="40">
				<td></td>
				<td><input type="submit" value="수정">&nbsp;&nbsp;&nbsp;
					<input type="reset" value="취소"></td>
			</tr>
		</table>
		</form>
		<hr>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="/Web02/index.jsp">[Home]</a>&nbsp;
</body>
</html>