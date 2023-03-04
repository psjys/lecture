<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** MemberJoin SpringBoot_Mybatis **</title>
<link rel="stylesheet" type="text/css" href="/resources/myLib/myStyle.css" >
<script src="/resources/myLib/jquery-3.2.1.min.js"></script>
<script src="/resources/myLib/inCheck.js"></script>
<script> "use strict"

function idDupCheck() {
		// 1) id 무결성 확인
		if ( iCheck==false ) iCheck=idCheck();
		else {
		// 2) 서버로 확인요청 -> 결과는 새창으로 처리
			let url='/member/idDupCheck?id='+document.getElementById('id').value;
			window.open(url, '_blank','width=400,height=300,resizable=yes,scrollbars=yes,toolbar=no,menubar=yes');
		}
	} //idDupCheck

// ** 입력값의 무결성 점검 *******************
	// 1) 입력값의 무결성 점검 여부를 확인할수 있는 변수
	// => 전역변수 정의 (switch 변수) 
	let iCheck=false;
	let pCheck=false;
	let p2Check=false;
	let nCheck=false;
	let aCheck=false;
	let oCheck=false;
	let bCheck=false;
	
	// 2) 개별적으로 확인
	// => 오류가 없으면 switch 변수를 true
	// => EnterKey, focusout 적용
	// => 처리순서: Tag 인식, Tag의 Value 가져오기 -> 무결성확인  
	onload=function() {	
		// ** ID 
		// => EnterKey, focusout 모두 적용
		document.getElementById('id').addEventListener("keydown", 
			(e) => { if ( e.which==13 ) {
						e.preventDefault();
						// => form 에 submit 이 있는경우
						// => enter 누르면 자동 submit 발생되므로 이를 제거함
						document.getElementById('idDup').focus(); 
						} //if
					});
		document.getElementById('id').addEventListener("focusout", 
			() => { iCheck=idCheck(); } );
		
		// ** ID 중복확인버튼
		document.getElementById('idDup').addEventListener("keydown", 
			(e) => { if ( e.which==13 ) {
						e.preventDefault();
						// => form 에 submit 이 있는경우
						// => enter 누르면 자동 submit 발생되므로 이를 제거함
						document.getElementById('password').focus(); 
						} //if
					});
		
		// ** Password
		document.getElementById('password').addEventListener("keydown", 
			(e) => { if ( e.which==13 ) {
						e.preventDefault();
						document.getElementById('password2').focus(); 
						} //if
					});
		document.getElementById('password').addEventListener("focusout", 
			() => { pCheck=pwCheck(); } );
		// ** Password 재입력 확인 : password 와 동일성 확인
		document.getElementById('password2').addEventListener("keydown", 
			(e) => { if ( e.which==13 ) {
						e.preventDefault();
						document.getElementById('name').focus(); 
						} //if
					});
		document.getElementById('password2').addEventListener("focusout", 
			() => { p2Check=pw2Check(); } );
		
		// ** Name
		document.getElementById('name').addEventListener("keydown", 
			(e) => { if ( e.which==13 ) {
						e.preventDefault();
						document.getElementById('age').focus(); 
						} //if
					});
		document.getElementById('name').addEventListener("focusout", 
			() => { nCheck=nmCheck(); } );
		
		// ** Age
		document.getElementById('age').addEventListener("keydown", 
			(e) => { if ( e.which==13 ) {
						e.preventDefault();
						document.getElementById('jno').focus(); 
						} //if
					});
		document.getElementById('age').addEventListener("focusout", 
			() => { aCheck=agCheck(); } );
		
		// ** Jno => EnterKey 만 적용
		document.getElementById('jno').addEventListener("keydown", 
			(e) => { if ( e.which==13 ) {
						e.preventDefault();
						document.getElementById('info').focus(); 
						} //if
					});
		
		// ** Info => EnterKey 만 적용
		document.getElementById('info').addEventListener("keydown", 
			(e) => { if ( e.which==13 ) {
						e.preventDefault();
						document.getElementById('point').focus(); 
						} //if
					});
		
		// ** Point
		document.getElementById('point').addEventListener("keydown", 
			(e) => { if ( e.which==13 ) {
						e.preventDefault();
						document.getElementById('birthday').focus(); 
						} //if
					});
		document.getElementById('point').addEventListener("focusout", 
			() => { oCheck=poCheck(); } );
		
		// ** Birthday
		document.getElementById('birthday').addEventListener("keydown", 
			(e) => { if ( e.which==13 ) {
						e.preventDefault();
						document.getElementById('rid').focus(); 
						} //if
					});
		document.getElementById('birthday').addEventListener("focusout", 
			() => { bCheck=bdCheck(); } );
		
		// ** rid,  uploadfilef => EnterKey 만 적용
		document.getElementById('rid').addEventListener("keydown", 
				(e) => { if ( e.which==13 ) {
							e.preventDefault();
							document.getElementById('uploadfilef').focus(); 
							} //if
						});
		document.getElementById('uploadfilef').addEventListener("keydown", 
				(e) => { if ( e.which==13 ) {
							e.preventDefault();
							document.getElementById('submit').focus(); 
							} //if
						});
		
	} // onload

	// 3) submit 판단 & 실행
	// => 모든항목의 무결성을 확인
	// => 오류가 없으면 : return true
	// => 오류가 1항목이라도 있으면 : return false
	function inCheck() {
		if ( iCheck==false ) { document.getElementById('iMessage').innerHTML= ' 필수입력, id 를 확인하세요 ~~'; }
		if ( pCheck==false ) { document.getElementById('pMessage').innerHTML= ' 필수입력, password 를 확인하세요 ~~'; }
		if ( p2Check==false ) { document.getElementById('p2Message').innerHTML= ' 필수입력, password2 를 확인하세요 ~~'; }
		if ( nCheck==false ) { document.getElementById('nMessage').innerHTML= ' 필수입력, name 을 확인하세요 ~~'; }
		if ( aCheck==false ) { document.getElementById('aMessage').innerHTML= ' 필수입력, age 를 확인하세요 ~~'; }
		if ( oCheck==false ) { document.getElementById('oMessage').innerHTML= ' 필수입력, point 를 확인하세요 ~~'; }
		if ( bCheck==false ) { document.getElementById('bMessage').innerHTML= ' 필수입력, birthday 를 확인하세요 ~~'; }
		
		if ( iCheck && pCheck && p2Check && nCheck &&
			 aCheck && oCheck && bCheck ) {
			// => submit 확인
			if ( confirm(" 정말 가입 하십니까? (Yes:확인 / No:취소) ")==false ) {
				alert("~~ 가입이 취소 되었습니다 ~~");
				return false;
			}else return true; // => submit 진행
		}else {
			return false;
		}
	} //inCheck

</script>
</head>
<body>
<h2>** MemberJoin SpringBoot_Mybatis **</h2>
<form action="join" method="post" enctype="multipart/form-data" id="myForm">
<table>
	<tr height="40"><td bgcolor="LightBlue">I D</td>
		<td><input type="text" name="id" size="20" id="id" placeholder="영문과 숫자 10자 이내">
			<button type="button" id="idDup" onclick="idDupCheck()" >ID 중복확인</button>	<br>
			<span id="iMessage" class="eMessage" ></span></td></tr>
	<tr height="40"><td bgcolor="LightBlue">Password</td>
		<td><input type="password" name="password" id="password" size="20" placeholder="특수문자반드시포함 10자 이내"><br>
			<span id="pMessage" class="eMessage" ></span></td></tr>
	<tr height="40"><td bgcolor="LightBlue">Password 확인</td>
		<td><input type="password" id="password2" size="20" placeholder="특수문자반드시포함 10자 이내"><br>
			<span id="p2Message" class="eMessage" ></span></td></tr>
	<tr height="40"><td bgcolor="LightBlue">Name</td>
		<td><input type="text" name="name" id="name" size="20" placeholder="영문과 한글 10자 이내"><br>
			<span id="nMessage" class="eMessage" ></span></td></tr>
	<tr height="40"><td bgcolor="LightBlue">Age</td>
		<td><input type="text" name="age" id="age" size="20" placeholder="정수"><br>
			<span id="aMessage" class="eMessage" ></span></td></tr>
	<tr height="40"><td bgcolor="LightBlue">Jno</td>
		<td><select name="jno" id="jno">
			<option value="1">1조: 굉장해엄청나</option>
			<option value="2">2조: 구해조</option>
			<option value="3">3조: 백업은 기본이조</option>
			<option value="4">4조: 상호형 빵사조</option>
			<option value="5">5조: (주)식빵</option>
			<option value="7">7조: 칠면조</option>
		</select></td>
	</tr>
	<tr height="40"><td bgcolor="LightBlue">Info</td>
		<td><input type="text" name="info" placeholder="자기소개" id="info"></td>
	</tr>
	<tr height="40"><td bgcolor="LightBlue">Point</td>
		<td><input type="text" name="point" id="point" size="20" placeholder="실수"><br>
			<span id="oMessage" class="eMessage" ></span></td></tr>
	<tr height="40"><td bgcolor="LightBlue">Birthday</td>
		<td><input type="date" name="birthday" id="birthday" size="20"><br>
			<span id="bMessage" class="eMessage"></span></td></tr>
	
	<tr height="40"><td bgcolor="LightBlue">추천인_ID</td>
		<td><input type="text" name="rid" size="20" id="rid"></td>
	</tr>
	
	<tr height="40"><td bgcolor="LightBlue">Image</td>
		<td><img  src="" class="select_img"><br>
			<input type="file" name="uploadfilef" id="uploadfilef" size="20"></td></tr>
			<script>
				$('#uploadfilef').change(function(){
					if(this.files && this.files[0]) {
						let reader = new FileReader;
						reader.readAsDataURL(this.files[0]);
			 			reader.onload = function(e) {
		 					$(".select_img").attr("src", e.target.result)
		 									.width(80).height(100); 
		 				} // onload_function
			 		} // if	
				}); //change
			</script>
	
	<tr height="40"><td></td>
		<td><input type="submit" value="가입" onclick="return inCheck()" id="submit" disabled>&nbsp;&nbsp;&nbsp;
			<input type="reset" value="취소">&nbsp;&nbsp;
			<button type="button" onclick="return inCheck()" disabled>Button_inForm</button><br>
			<span class="textlink" onclick="axjoin()">axJoin</span>&nbsp;&nbsp;  
			<span class="textlink" onclick="axRSJoin1()">axRSJoin1</span>&nbsp;&nbsp; 
			<span class="textlink" onclick="axRSJoin2()">axRSJoin2</span>&nbsp;&nbsp;  
		</td>
	</tr>
</table>
</form>

<c:if test="${not empty requestScope.message}">
	<hr>
	=> ${requestScope.message}<br>
</c:if>
<hr>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="/home">[Home]</a>&nbsp;
</body>
</html>