<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** WebSocket Echo Test **</title>
<link rel="stylesheet" type="text/css" href="resources/myLib/myStyle.css">
<script>
//** WebSocket 통신
// 1) WebSocket 생성
// 2) 연결
// 	=> 생성시 매개변수로 서버 url 지정
// 	   프로토콜: ws 일반통신  /  wss 보안통신     
// 	   요청명 : ws_echo 요청은 설정화일 에서 처리
// 3) message 서버로 전송 
// 	=> 웹소켓 open -> 전송
// 4) 응답 ( 담당 메서드에 핸들러 function 지정 _ 이름만 지정하면 됨 )
// 5) 연결종료 ( 종료시 호출할 function 지정 )

	let wsocket;
	
	function sendClick() {
		// ** 생성 & 연결 : 1), 2)
		wsocket = new WebSocket("ws://localhost:8080/green/ws_echo");
		
		// ** 웹소켓 open -> 전송 : 3)
		wsocket.onopen = () => {
			wsocket.send( document.getElementById('message').value );
		}
		// ** 응답 : 4) 
		// => 해당 이벤트 발생 시 우측에 지정된 function 이 실행
		wsocket.onmessage = onMessage;
		// ** 연결 종료 : 5)
		wsocket.onclose = onClose;
	} // sendClick
	
	function onMessage(e) {
		let data = e.data;
		alert('** from Server Message => ' + data);
		wsocket.close();
		// 응답 확인 후 종료 -> 종료 이벤트 발생 시 onClose() 메서드 실행 됨 
	} // onMessage
	
	function onClose() {
		alert('** 연결 종료 **');
	} // onClose
	
</script>
</head>
<body>
	<h2>** WebSocket Echo Test **</h2>
	<br><br>
	<input type="text" id="message">&nbsp;
	<input type="button" id="sendBtn" value="전송" onclick="sendClick()">
	<br><br><hr>
	<a href="home">[Home]</a>

</body>
</html>