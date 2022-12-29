<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Include Main **</title>
</head>
<body>
<pre><h3>
*** Include Main ***
=> Jsp 에서 다른 웹문서(Page) 포함하기
=> JspActionTag: include , Directive: include

** 1) Jsp Action Tag
=> Jsp 문서의 완성된 웹페이지가 포함됨.
=> 변수 공유 불가능 (코드 호환이 안됨)

** 2) Directive
=> Jsp 문서의 소스코드가 포함됨
=> 변수 공유 가능 (코드 호환이 됨)

** Test
=> sub 호출전 : 변수정의
<% int mainValue=7900; %>
* mainValue=> <%=mainValue%>
=> sub 호출 (include) 
~~~~~~~~~~~~~~~~~~~~~~~~~~~
<jsp:include page="ex03_01includeSub.jsp" />

<%-- <%@ include file="ex03_01includeSub.jsp" %> --%>
~~~~~~~~~~~~~~~~~~~~~~~~~~~
=> sub 호출 후 main
<%-- => sub 변수 출력 : <%=menu%> --%>



</h3></pre>
</body>
</html>