<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
	buffer="8kb" autoFlush="true"    
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Buffer Test **</title>
</head>
<body>
<h3><pre>
** Buffer Test
=> 관련 속성 (page 디렉티브)
   - buffer : 버퍼 사용여부 및 크기 지정
      8kb (기본),
      none (사용하지않음)
   - autoFlush : 버퍼가 다 찼을 때 처리 방식
      true (플러시하고 계속 작업)
      false (overflow Exception 발생)
      -> java.io.IOException: 오류: JSP 버퍼 오버플로우
</pre></h3>
<%
// Test1. 1kb 이상의 출력문 
//  1.1 ) buffer="1kb" autoFlush="true/false"
//  => true : 정상 실행 
//  => false : 500, JSP 버퍼 오버플로우
//  1.2 ) buffer="8kb" autoFlush="true/false"
//  => "true/false" 모두 용량이 충분하기 때문에 정상 실행 
	for (int i=0 ; i<1000; i++) {
		out.println("1234");
	}

	if (true) {
		out.print("<br>** Exception 발생 **"); 
		// Exception 발생 시 500 -> 강제 중지 
		throw new Exception();
	}
	
//	Test2. 예외 발생 코드 추가 
//	=> buffer 용량에 따라 Exception 발생 전에 먼저 채워진 buffer 가 출력되는지 확인

//	2.1) buffer="1kb" autoFlush="true/false"
//	=> true : 이미 채워진 1kb 는 먼저 출력되고, 강제 발생 Exception에 의해 비정상 종료됨. 
//	=> false : 500 -> JSP 버퍼 오버플로우
	
//	2.2) buffer="8kb" autoFlush="true/false"
//	=> true / false : 버퍼가 채워지기 전에 Exception 코드가 실행되므로 모두 500
//		( javax.servlet.ServletException : java.lang.Exception ... )

%>
<hr>
*** Program 정상 종료 *** 
</body>
</html>