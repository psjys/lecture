<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** EL basic **</title>
</head>
<body>
<pre><h3>
** EL Basic **
=> EL: Expression Language , 표현언어
=> 편리한 값(Value) 의 출력과 사용 

1. 값(변수의 값) 의 출력 비교
=> Java 표현식 : <%="Java 표현식"%>
=> Java 의 out 객체 : <% out.print(""); %> <!-- 실행문이니까 ; 붙여야 함 --> 
=> EL : ${"~~ Hello EL !!! ~~~"}
<hr>
2. EL Test
** EL 자료형 **
정수형 : ${10}
실수형 : ${10.123}
문자형 : ${"안녕하세요 EL~~ "}
논리형 : ${true}
null : ${null}

** EL 연산 **
=> 산술(4칙) 연산
\${5+2} => ${5+2}
\${5-2} => ${5-2}
\${5*2} => ${5*2}
\${5/2} => ${5/2}
\${5%2} => ${5%2}

=> 관계연산 : 결과는 true/false
<!-- >, <, >=, <=, ==, != -->
-> gt: greater than / lt: less than 
-> ge: greater equal / le: less equal
-> eq: equal, == / ne: not equal , != 

\${5>2} => ${5>2}
\${5gt2} => ${5 gt 2}

\${5<2} => ${5<2}
\${5lt2} => ${5 lt 2}

\${5>=2} => ${5>=2}
\${5ge2} => ${5 ge 2}

\${5<=2} => ${5<=2}
\${5le2} => ${5 le 2}

\${5!=2} => ${5!=2}
<%-- \${5ne2} => ${5 ne 2} 
	에디터 상에만 오류표시 : 실행은 잘됨 --%>


=> 논리(집합) 연산 : && , ||
\${5>2 && 10>20} => ${5>2 && 10>20}
\${5>2 || 10>20} => ${5>2 || 10>20}

=> 조건(삼항) 식
\&{5>2 ? 5:2} => ${5>2 ? 5:2}
\&{5>2 ? "오":"이"} => ${5>2 ? "오":"이"}

** Java 변수
<%String name = "홍길동"; %>
=> Java 표현식 : <%=name%>
=> \${name} : ${name}
=> 자바 변수는 출력하지 않음 JSTL로 정의한 변수는 출력 
	-> name 값이 없음을 확인
	-> \${ empty_name } : ${empty name}
<!-- => empty : 검사할 객체가 비어있는지 확인 
            비어있으면 true 
            list, map 타입의 객체가 값이 있는지 없는지 구분해줌  
    => EL 에 자바변수는 직접 값을 전달하지 못함
     (jsp에서 자바코드가 완전 분리됨을 목표로 하기때문에 자바변수를 사용할 필요는 없으므로)  
    => EL 에 변수명이 오면 속성(Attribute) 의 이름으로 인식함.              
 -->

** request 객체의 Parameter 처리 : 자바 표현식에 비해 매우 편리 
=> request 객체의 Parameter 를 전달하는 el의 내부 객체 제공 : param
=> 쿼리 스트링으로 id 지정 전, 후 Test : ~/Web01/jsp05_el/ex01_start.jsp?id=banana
\${empty_param.id} : ${empty param.id} <!-- 객체 명이 param -->
\${param.id} : ${param.id}
\${param["id"]} : ${param["id"]}
* Java 표현식과 비교 : <%=request.getParameter("id")%>


** getAttribute 처리 
=> ex02에서 계속

</h3></pre>
</body>
</html>