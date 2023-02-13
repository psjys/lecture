<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** MemberJoin Spring02_MVC2 **</title>
<link rel="stylesheet" type="text/css"
	href="resources/myLib/myStyle.css">
<script src="resources/myLib/jquery-3.2.1.min.js"></script>
<script src="resources/myLib/inCheck.js"></script>
<script>

//** ID 중복 확인 
// => UI 개선사항
// => 중복확인 버튼 추가
//    처음 : 중복확인_enable / submit_disable
// => 중복확인 완료후 submit 이 가능하도록
//    중복확인_disable / submit_enable
// => 중복확인 기능 : function idDupCheck()
//    id 확인요청 -> 서버로 전송 -> id , selectOne 결과 -> response: 사용가능/불가능 
// => 서버측 : 컨트롤러에 idDupCheck 요청을 처리하는 매핑메서드, view_Page 작성   

	function idDupCheck() {
	   // 1) id 무결성 확인
	  	if (iCheck == false ) iCheck = idCheck();
	  	else {
	   // 2) 서버로 확인요청 -> 결과는 새창으로 처리
			let url='idDupCheck?id='+document.getElementById('id').value;
	   		window.open(url, '_blank', 'width=400, height=300, resizable=yes, scrollbars=yes, toolbar=no, menubar=yes');
	   		
	  	}
	   
	} // idDupCheck


//** 입력 값의 무결성 점검 ***********************
	
	// 1) 입력값의 무결성 점검 여부를 확인할 수 있는 변수 
	// => 전역 변수 정의 (switch 변수)
	
	let iCheck=false;
	let pCheck=false;
	let p2Check=false;
	let nCheck=false;
	let aCheck=false;
	let oCheck=false;
	let bCheck=false;
	
	// 2) 개별적으로 확인 
	// => 오류가 없으면 switch 변수를 true 로 만듦
	// => focusout , enterKey 적용
	// => 처리순서 : Tag 인식, Tag의 Value 가져오기 -> 무결성 확인  
	
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
		
		// ** ID 중복 확인 버튼
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
		
		// **rid, uploadfilef => EnterKey 만 적용
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
	
	
	// ** submit 판단 & 실행 
	// => 모든 항목의 무결성을 확인 
	// => 오류가 없으면 : return true 
	// => 오류가 한 항목이라도 있으면 : return false
	function inCheck() {
		if( iCheck == false ) { $('#iMessage').html('필수입력, id를 확인하세요 ~~'); }
		if( pCheck == false ) { $('#pMessage').html('필수입력, password를 확인하세요 ~~'); }
		if( p2Check == false ) { $('#p2Message').html('필수입력, password2를 확인하세요 ~~'); }
		if( nCheck == false ) { $('#nMessage').html('필수입력, name을 확인하세요 ~~'); }
		if( aCheck == false ) { $('#aMessage').html('필수입력, age를 확인하세요 ~~'); }
		if( oCheck == false ) { $('#oMessage').html('필수입력, point를 확인하세요 ~~'); }
		if( bCheck == false ) { $('#bMessage').html('필수입력, birthday를 확인하세요 ~~'); }
		
		if (iCheck && pCheck && p2Check && nCheck && 
			aCheck && oCheck && bCheck ) {
			// => submit 확인
			if ( confirm(" 정말 가입 하십니까? (Yes : 확인 / No : 취소)")==false  ) {
				alert("~~ 가입이 취소 되었습니다 ~~");
				return false;
			} else {
				return true; // 이때만 submit 진행됨 
			}
			
		} else {
			return false;
		}
			
	} // inCheck

</script>
</head>
<body>
	<!--  ** FileUpLoad Form **
=> form 과 table Tag 사용시 주의사항 : form 내부에 table 사용해야함
   -> form 단위작업시 인식안됨
   -> JQ 의 serialize, FormData 의 append all 등 
   
=> method="post" : 255 byte 이상 대용량 전송 가능 하므로 
=> enctype="multipart/form-data" : 화일 upload 를 가능하게 해줌 
   ** multipart/form-data는 파일업로드가 있는 입력양식요소에 사용되는 enctype 속성의 값중 하나이고, 
       multipart는 폼데이터가 여러 부분으로 나뉘어 서버로 전송되는 것을 의미
       이 폼이 제출될 때 이 형식을 서버에 알려주며, 
       multipart/form-data로 지정이 되어 있어야 서버에서 정상적으로 데이터를 처리할 수 있다.     
-->
	<h2>** MemberJoin Spring02_MVC2 **</h2>
	<form action="mjoin" method="post" enctype="multipart/form-data"
		id="myForm">
		<table>
			<tr height="40">
				<td bgcolor="lightBlue">I D</td>
				<td><input type="text" name="id" size="20" id="id"
					placeholder="영문과 숫자 10자 이내">
					<button type="button" id="idDup" onclick="idDupCheck()" >ID 중복확인</button> <br>
					<span id="iMessage" class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<td bgcolor="lightBlue">Password</td>
				<td><input type="password" name="password" id="password"
					size="20" placeholder="특수문자반드시포함 10자 이내"><br> <span
					id="pMessage" class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<td bgcolor="lightBlue">Password 확인</td>
				<td><input type="password" id="password2"
					size="20" placeholder="특수문자반드시포함 10자 이내"><br> <span
					id="p2Message" class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<td bgcolor="lightBlue">Name</td>
				<td><input type="text" name="name" id="name" size="20"
					placeholder="영문과 한글 10자 이내"><br> <span id="nMessage"
					class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<td bgcolor="lightBlue">Age</td>
				<td><input type="text" name="age" id="age" size="20"
					placeholder="정수"><br> <span id="aMessage"
					class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<td bgcolor="lightBlue">Jno</td>
				<td><select name="jno" id="jno">
						<option value="1">1조:굉장해엄청나</option>
						<option value="2">2조:구해조</option>
						<option value="3">3조:백업은 기본이조</option>
						<option value="4">4조:상호형 빵사조</option>
						<option value="5">5조:(주)식빵</option>
						<option value="5">7조:칠면조</option>
				</select></td>
			</tr>
			<tr height="40">
				<td bgcolor="lightBlue">Info</td>
				<td><input type="text" id="info" name="info" size="20" placeholder="자기소개"></td>
			</tr>
			<tr height="40">
				<td bgcolor="lightBlue">Point</td>
				<td><input type="text" name="point" id="point" size="20"
					placeholder="실수"><br> <span id="oMessage"
					class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<td bgcolor="lightBlue">Birthday</td>
				<td><input type="date" name="birthday" id="birthday" size="20"><br>
					<span id="bMessage" class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<td bgcolor="lightBlue">추천인_ID</td>
				<td><input type="text" id="rid" name="rid" size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="lightBlue">Image</td>
				<td><img src="" class="select_img"><br> <input
					type="file" name="uploadfilef" id="uploadfilef" size="20"></td>
			</tr>
			<script>
         // 해당 파일의 서버상의 경로를 src로 지정하는것으로는 클라이언트 영역에서 이미지는 표시될수 없기 때문에
         // 이를 해결하기 위해 FileReader이라는 Web API를 사용
         // => 이 를 통해 url data를 얻을 수 있음.
         //    ( https://developer.mozilla.org/ko/docs/Web/API/FileReader)
         // ** FileReader
         // => 웹 애플리케이션이 비동기적으로 데이터를 읽기 위하여,
         //    읽을 파일을 가리키는File 혹은 Blob 객체를 이용해 파일의 내용을(혹은 raw data버퍼로) 읽고 
         //    사용자의 컴퓨터에 저장하는 것을 가능하게 해줌.   
         // => FileReader.readAsDataURL()
         //     지정된 Blob의 내용 읽기를 시작하고, 완료되면 result 속성에 파일 데이터를 나타내는 data: URL이 포함됨.
         // => FileReader.onload 이벤트의 핸들러.
         //    읽기 동작이 성공적으로 완료 되었을 때마다 발생.
         // => e.target : 이벤트를 유발시킨 DOM 객체
         // => type="file" 은 복수개의 파일을 업로드할수 있도록 설계됨
         //    그러므로 files[] 배열 형태의 속성을 가짐
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


			<tr height="40">
				<td></td>
				<td><input type="submit" id="submit" value="가입" onclick="return inCheck()" disabled>&nbsp;&nbsp;&nbsp;
					<!-- ** JavaScript 방식으로 type submit 활용 
         => onclick 이벤트를 가로채서, 무결성 점검을 하고, 
         => 오류 발생시에 submit 되는것을 막기위해 submit 이벤트를 제거함.
         => JS 에서는 function 의 return false 로 해당 이벤트가 무효화. --> <input
					type="reset" value="취소">&nbsp;&nbsp;
					<button type="button" onclick="return inCheck()" disabled>Button_inForm</button><br>

					<!-- Button Test
         => default : form 내부에서는  submit 와  동일하게 작동됨 
                     inCheck() 의 return 값에 따라 (true 면) submit 진행됨 
         => 단, type 속성을 선택하면 (button, reset, submit 등) 속성에 맞게 실행됨
            예) button 을 선택하면 submit 은 실행되지않음   -->
            <span class="textlink" onclick="axjoin()">axJoin</span>&nbsp;&nbsp;
            <span class="textlink" onclick="axRSJoin1()">axRSJoin1</span>&nbsp;&nbsp;
            <span class="textlink" onclick="axRSJoin2()">axRSJoin2</span>&nbsp;&nbsp;
            </td>
			</tr>
		</table>
	</form>
	<!-- <hr>
<button onclick="return inCheck()">Button_outForm</button>
=> inCheck() 실행결과 비교<br>
=> function()은 실행 되지만, submit 은 안됨<br> -->

	<c:if test="${not empty requestScope.message}">
		<hr>
   => ${requestScope.message} <br>
	</c:if>
	<hr>
	&nbsp;
	<a href="javascript:history.go(-1)">이전으로</a>&nbsp; &nbsp;
	<a href="home">[Home]</a>&nbsp;
</body>
</html>