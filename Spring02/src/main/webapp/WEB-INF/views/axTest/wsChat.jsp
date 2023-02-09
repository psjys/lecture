<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** WebSocket Chatting Room **</title>
<link rel="stylesheet" type="text/css" href="resources/myLib/myStyle.css">
<script src="resources/myLib/jquery-3.2.1.min.js"></script>
<style>
	#chatArea {
		width : 300px;
		height : 200px;
		overflow-y : auto;
		border : 1px solid green;
	}

</style>
<script>
//** WebSocket 통신
//1) WebSocket 생성
//2) 입장하기 / 나가기
//3) message 서버로 전송 
//4) 응답 
//5) 연결종료
	let wsocket;
	// 연결
	function connect() {
		// ** 생성 & 연결 : 1), 2)
		wsocket = new WebSocket("ws://localhost:8080/green/ws_chat");
		
		// ** 웹소켓 open 
		wsocket.onopen = onOpen; // 연결 시 사용하는 콜백 함수 
		// ** 응답 
		wsocket.onmessage = onMessage; // 서버로부터 메시지 도착 시 콜백 함수 
		// ** 연결 종료 
		wsocket.onclose = onClose; 
		
	} // connect
	
	// ** 연결 종료 
	function disConnect() {
		wsocket.close();
	} // disConnect
	
	// ** 콜백 (CallBack) 함수 
	function onOpen() {
		appendMessage("~~ 연결되었습니다 ~~");
	}
	function onMessage(e) {
		let data = e.data;
		if (data.substr(0,4)=='msg:') {
			appendMessage(data.substr(4));
		} 
	} // onMessage 
	
	function onClose() {
		alert("** 연결 종료 **");
	} // onClose 
	
	// ** 실행 함수들 
	function send() {
		wsocket.send("msg:"+document.getElementById('nickname').value
					+ ":" + document.getElementById('message').value);
		
		document.getElementById('message').value=''; // send 후 clear 
	}
	
	function appendMessage(msg) {
		// Message Area 에 Message 를 추가  & scroll 이동
		$('#chatMessage').append(msg+'<br>');
		let caheight = $('#chatArea').height();
		let maxScroll = $('#chatMessage').height() - caheight;
		$('#chatArea').scrollTop(maxScroll);
		
	} // appendMessage
	
	// => message 입력 후 enterKey 입력시에도 전송되도록 
	function keyPress(e) {
	    // 입력된 key 확인 
	    // => Javascript : event.keyCode , jQuery : event.which
	    // => console 출력 결과를 보면 크롬에서는 아무거나 써도 될듯
	    //    그러나 브라우져 마다 차이가 있을수 있기 때문에 아래 코드 사용 
	    console.log('e.keyCode =>'+event.keyCode+'e.which =>'+event.which);
	      
		let keyCode = (e.keyCode ? e.keyCode: e.which);
		if(keyCode == 13) send();
		
	} // keyPress
	
</script>
</head>
<body>
<h2>** WebSocket Chatting Room **</h2>

I D : <input type="text" id="nickname">
	  <input type="button" id="enterBtn" value="입장하기" onclick="connect()">
	  <input type="button" id="exitBtn" value="나가기" onclick="disConnect()">
<h3>~~ Chatting Area ~~</h3>
<div id="chatArea">
	<div id="chatMessage"></div>
</div>
<br>
<input type="text" id="message" size="33" onkeypress="keyPress(event)">
<input type="button" id="sendBtn" value="전송" onclick="send()">
<br><br><hr>

<a href="home">[Home]</a>
</body>
</html>