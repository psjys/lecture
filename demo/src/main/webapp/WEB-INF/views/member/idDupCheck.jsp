<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** ID 중복확인 **</title>
<script src="/resources/myLib/inCheck.js"></script>
<script>

//** idOK : 사용자가 입력한 id 를 사용가능하도록 해주고, 현재(this)창은 close

function idOK() {
	// 1)
	//=> jsp 문서 내부의 <script> 에서 EL은 문자열Type 내부에서만 사용 가능함.
	opener.document.getElementById('id').value='${param.id}';
	// 2)
	opener.document.getElementById('idDup').disabled='disabled';
	opener.document.getElementById('submit').disabled='';
	// 3) 
	opener.document.getElementById('id').readOnly=true; // OK
	opener.document.getElementById('password').focus();
	// 4)
	window.close();
	// => close() , self.close()
} //idOK
</script>
<style>
	body {
		background-color: LightYellow;
		font-family: 맑은고딕;
	}
	#wrap {
		margin-left: 0;
		text-align: center;
	}
	h3 { color: navy; }	
</style>
</head>
<body>
<div id="wrap">
	<h2>** ID 중복확인 **</h2>
	<hr>
	<!-- ID 재선택 -->
	<form action="idDupCheck" method="get">
		User_ID : 
		<input type="text" name="id" id="id">&nbsp;
		<input type="submit" value="ID 중복확인" onclick="return idCheck()"><br>
		<!-- inCheck.js 의  idCheck() 의 결과에 따라 submit 결정 -->
		<span id="iMessage" class="eMessage"></span>
	</form>
	<br><br>
	<!-- 서버의 처리결과 : idUse 의 값 'T'/'F' 에 따른 화면 -->
	<div id="msgBlock">
		<c:if test="${idUse=='T'}">
			${memberVO.id} 는(은) 사용가능 합니다 ~~&nbsp;&nbsp;
			<input type="button" value="id_OK" onclick="idOK()">
		</c:if>
		<c:if test="${idUse=='F'}">
			${param.id} 는(은) 사용 불가능합니다 (사용중) ~~~ <br>
			다시 입력하세요 ~~<br>
			<script>
				document.getElementById('id').focus();		
				opener.document.getElementById('id').value='';
			</script>
		</c:if>
	</div>
</div>
</body>
</html>