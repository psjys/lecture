<%@page import="java.util.Arrays"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Request Parameter Test **</title>
</head>
<body>
<pre><h2>
** Request Parameter Test **
** 당신의 정보
=> post 요청 시에는 한글 처리 필요함 
<% request.setCharacterEncoding("UTF-8"); %>

 * I D : <%=request.getParameter("id") %>
 * Name: <%=request.getParameter("name") %>
 * 좋아하는 동물은 => 
 <% String[] pet = request.getParameterValues("pet"); 
 	if (pet != null) {
 		for(String p : pet) {
 			out.print(" "+p);
 		}
 	} else {
 		out.print("선택한 동물이 없습니다.");
 	}
 %>
 
 ** 좋아하는 동물은 2 => <%=Arrays.toString(pet) %>
* 좋아하는 동물은 3 =>
<% if (request.getParameterValues("pet")==null) {%>
   <%="선택한 동물이 없습니다 ~~"%>
   <% return; } %>
<%   for (String p:request.getParameterValues("pet")) {
   switch(p) {
   case "강아지": p="강아지 "; break;
   case "고양이": p="고양이 "; break;
   case "pig": p="꿀꿀이 "; break;
   case "eagle": p="독수리 "; break;
   default: break;
   } %>
   <%=p%>
<%}%>
</h2></pre>