<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** JSL Loop (forEach) Test **</title>
<%
String[] menu = { "고등어무조림", "떡갈비", "찜닭", "마파두부덮밥", "오삼불고기" };
pageContext.setAttribute("menuList", menu);
%>
</head>
<body>
	<pre>
		<h3>
** JSL Loop (forEach) Test **
1) forEach 기본 형식
=> Java 의 forEach 와 유사
	for (String s : students) { out.print(s) }
</h3>
	</pre>

	<c:forEach var="menu" items="${menuList}">
	${menu},&nbsp;
	<%-- 동일 결과 <c:out value="${menu}"/> --%>
	</c:forEach>
	<pre>
		<h3>
2) varStatus 속성 활용
=> index, count, first, last 
</h3>
	</pre>
	<table border="1" style="text-align: center; width: 100%;">
		<tr>
			<th>menu</th>
			<th>index</th>
			<th>count</th>
			<th>first</th>
			<th>last</th>
		</tr>
		<c:forEach var="menu" items="${menuList}" varStatus="vs">
			<tr>
				<td>${menu}</td>
				<td>${vs.index}</td>
				<td>${vs.count}</td>
				<td>${vs.first}</td>
				<td>${vs.last}</td>
			</tr>
		</c:forEach>
	</table>
	<pre>
		<h3>
3) varStatus 속성 연습
=> first, last : boolean Type
=> for, if(또는 choose) 구문 모두 중첩 가능 
=> 과제 
	. first 는 굵은 파랑으로 출력 
	. ul, li 를 이용해서 세로로 출력하면서 menu 뒤에 ',' 표시
	. 단, 마지막에는 마침표를 표시하세요 
	
=> 결과

</h3>
	</pre>
<ul>
	<c:forEach var="menu" items="${menuList}" varStatus="vs">
	<c:choose>
		<c:when test="${vs.first}">
			<li style = "color:blue; font-weight:bold;">${menu},</li>
		</c:when>
		<c:otherwise>
			<li>${menu}${vs.last ? '.' : ','}</li>
		</c:otherwise>
	</c:choose>
	</c:forEach>
</ul>

</body>
</html>