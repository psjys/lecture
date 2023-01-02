<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** JSTL Start **</title>
</head>
<body>
<pre><h3>
** JSTL Start **
=> Jstl Library 를 정의 
   디렉티브 taglib 에 uri=".." prefix=".."
 
1. 출력 : out Tag
=> Java 의 out 객체, 표현식 역할, EL을 대신할 수 있음
<c:out value="~~~Hello JSTL !!~~~"/>

2. 변수 정의 
<c:set var="name" value="홍길동"/>
<c:set var="age" value="22"/>
=> Java 의 Script 와 비교
<% String name="자바구문"; %>
  -> 자바변수 name = <%=name%>

3. 변수 출력
=> Jstl 의 out Tag 
* name => <c:out value="${name}"/>
* age => <c:out value="${age}"/>

=> out Tag 의 출력 우선순위 : value, default, contents (out tag 열기닫기 태그 사이에 있는 것)
* 1순위 : default, contents 둘 다 사용했을 때 -> 500 오류 
<c:out value="V_1순위" default="D_2순위"></c:out>
<%-- <c:out value="V_1순위">contents</c:out> --%>

* 2순위 : default 
<c:out value="${name222}" default="D_2순위"/>
-> value값이 없는 값이므로 default 값이 출력됨 ! 
<%-- <c:out value="${name222}" default="D_2순위">컨텐츠_2순위</c:out> --%>

<c:set var="test">setTag_컨텐츠</c:set>
* out test => <c:out value="${test}"/>

=> EL 
\${name} => ${name}
\${age} => ${age}
\${age*100} => ${age*100}
\${test} => ${test}

4. 연산 적용
<c:set var="add" value="${age*5}"/>
\${add} => ${add}
<c:set var="bool" value="${age==name}"/>
\${bool} => ${bool}
<c:set var="max" value="${age>add ? age : add}"/>
\${max} => ${max}

5. 변수 삭제
=> remove 
<c:remove var="add"/>
\${empty_add} => ${empty add}
\${empty_max} => ${empty max}

=> 정의하지 않은 변수를 remove : 오류 발생 하지 않음 (아무 일도 안 생김)
<c:remove var="add123"/>

6. 우선순위
=> jstl 변수 와 Attribute 
=> 동일하게 Page에 정의된 경우에는 나중에 정의된 값이 우선 적용됨
   page(set변수, attribute 중 나중에 정의된 값 우선) 
         -> request -> session -> application 

<% 
	pageContext.setAttribute("name", "pageName");
	request.setAttribute("name", "requestName");
%>

* test1) jst1_변수_name, pageContext_name, request_name 3종류
\${name} => ${name} - pageContext_name 이 우선출력

* test2) jst1_변수_name 재정의
<c:set var="name" value="newName"/>
\${name} => ${name} - jst1_변수_name 우선 적용

</h3></pre>
</body>
</html>