/* ** Ajax_REST API Test ** 
*/

// ** Rest Login
// => loginForm 요청  
// => 모든 기능을 REST로 구현하면 form 에 대한 요청은 필요없게됨.  
function rsLoginf(){
 	$.ajax({
 	 	type:'Get',
 	 	url:'/member/loginForm',
 	 	success:function(resultPage) {
 	 		document.getElementById('resultArea1').innerHTML=resultPage;
 	 	},
 	 	error:function() {
 	 		document.getElementById('resultArea2').innerHTML='~~ Error 발생 !!! ~~~';
 	 	}
 	}); //ajax
}; //rsLoginf

// ** login 요청 처리
// => fetch 로 처리, Response 는 JSON 형식으로 

// => fetch response 처리 1단계 : ~.then(response => ....
//	-> 서버가 헤더로 HTTP Response를 하는즉시 이 Response 객체를 래핑한 Promise 객체를 반환함.
//	   이 시점에서는 HTTP상태, 성공여부, 헤더 등은 확인가능하지만 Body Data는 확인할 수 없음 
//	-> 그래서 Response Body-reading 메서드를 호출함. 
//	-> Response Body-reading 메서드는 하나만 선택가능 (추가호출해도 이미 처리되었으므로 작동하지않음)
//	   json(), text(), formData(), blob(), arrayBuffer() 등  

// => fetch response 처리 2단계 : ~.then(responseData => ....
//	-> 1단계에서 return 한 Body-reading Data 를 처리

// ** Promise
// => 비동기 처리에서 동기식(순차적) 처리를 지원해줌.
//    즉, 지연함수 와 비동기연산(Ajax) 을 제어할 수 있도록 해주는 객체. 
//   ( 지연함수: 지정한 시간 후에 실행 되도록 정의한 함수 )

function rsLogin() {
	let url='/test/rslogin';
	
	fetch(url, {method: 'POST',
				body : JSON.stringify({
      						id: document.getElementById('id').value,
      						password: document.getElementById('password').value 
    					}),
    			// POST 요청에서는 반드시 headers 형식 작성 (JSON 포맷을 사용함을 알려줘야함)
    			headers: { 'Content-Type': 'application/json' }
  	}).then(response => { 
    		if (!response.ok) throw new Error(response.status);
    		// => Error 임을 인지시켜 catch 블럭으로 
    		return response.json(); 
    		// => Response Body-reading 을 위해서는 추가 메서드 필요함. 
    		
    }).then(responseData => {
    		alert(`** responseData: id=${responseData.id}, name=${responseData.name}`);
    		// console.log(`** responseData: id=${responseData.id}`);
    		// => 현재코드에서는  아래 reload() 호출 때문에 console message 출력 안됨   
    		
    		location.reload();	
    }).catch(err => {
    		console.error(`** Error => ${err.message}`);
    		if ( err.message=='500' )  alert("~~ ID 오류 다시 하세요 ~~");
    		else if ( err.message=='502' ) alert("~~ Password 오류 다시 하세요 ~~");
    		else alert("~~ System 오류 => "+err.message);	
    });
	 
 } //rsLogin

// ** axRSJoDetail
// => loginForm 의 password 를 jno 값으로 활용 
//    id, jno 를 이용해서 member 검색  
// => 컨트롤러에서는 @PathVariable , ResponseEntity 적용 
//    @PathVariable 적용을 위해 Get방식, jno를 int 로 처리함.
//    경로의 일부로 Data를 전달
// => Response 는 JSON Type Data 로 받는다. 

// ** Test
// => rsdetail1 : ResponseEntity 적용안함
// => rsdetail2 : ResponseEntity 적용함
function rsDetail() {
	let id=document.getElementById('id').value;
	let jno=parseInt(document.getElementById('password').value);
	console.log(`** id=${id},  jno=${jno}`);
	
	$.ajax({  
		type:'Get',
		url:`rest/rsdetail2/${id}/${jno}.json`,  
			// => "rest/rsdetail1/banana/7"
			// => Response 로 JSON Type Data 를 요청함 
	 		//    .json 없으면 XML 형식으로 전달됨.
		success:(resultData) => {
			// ** JSON 처리 
			// => 컨트롤러의 처리 결과를 JSON Type 으로 전달받음
			console.log(`** success , id => ${resultData.id}`);
			
			let resultHtml =
			`<table border="1" align="center" width="80%">
				<caption><h3>** Ajax Success Result **</h3></caption>
        		<tr><th>I D</th><td>${resultData.id}</td></tr>	
        		<tr><th>Name</th><td>${resultData.name}</td></tr>
        		<tr><th>Info</th><td>${resultData.info}</td></tr>
        		<tr><th>Birthday</th><td>${resultData.birthday}</td></tr>
        		<tr><th>Jno</th><td>${resultData.jno}</td></tr>
        		<tr><th>Age</th><td>${resultData.age}</td></tr>
        		<tr><th>Point</th><td>${resultData.point}</td></tr>
        		<tr><th>Image</th><td><img src=${resultData.uploadfile} width=80 height=100></td><tr>
        	</table>`; 
 				
			$('#resultArea1').html(resultHtml);
			$('#resultArea2').html('');
		},
		error: () => {
			$('#resultArea2').html('~~ Ajax 요청 Error ~~');
		}
	}); //ajax
} //rsDetail

// *** Rest API => Member Join
// ** Join1 : fileupload 제외, formData 를 JS객체 -> JSON Type 으로 전송
function axRSJoin1() {
	// 1) Data 준비
	// => formData 를 JS객체
	
	let formData = {
		id:document.getElementById('id').value,
		password:document.getElementById('password').value,
		name:document.getElementById('name').value,
		info:document.getElementById('info').value,
		birthday:document.getElementById('birthday').value,
		jno:document.getElementById('jno').value,
		age:document.getElementById('age').value,
		point:document.getElementById('point').value,
	}
	
	// => JS객체 -> JSON Type 으로
	//let formData = new FormData(document.getElementById('myForm')); 
 	//let formData = $('#myForm').serialize();
 	// => 위둘은 JSON.stringify 적용 안됨
	
	let jsonData = JSON.stringify(formData);
	
	// => 비교출력 확인
	console.log('** formData => '+formData);
	console.log('** jsonData => '+jsonData);
	
	// 2) ajax 요청
	$.ajax({  
		type:'Post',
		url:'rest/rsjoin1',
		// data:formData,  // 비교 Test : 415 오류발생 (서버의 consumes 속성과 불일치)
		// data : JSON.stringify(formData), // 가능
		data:jsonData,
		contentType:'application/json',
		// headers : { "content-type": "application/json"}, // 동일코드
		// dataType: 'text', 	// 생략가능
		// => JSON Type Data 요청
		// => form 의 enctype="multipart/form-data" 과 무관하게 우선 적용됨		
		success:(resultData) => {
			// => 결과는 String 으로전달받음 
			document.getElementById('resultArea1').innerHTML=resultData;
			document.getElementById('resultArea2').innerHTML='';
		},
		error:() => {
			document.getElementById('resultArea2').innerHTML='~~ Ajax Join Error ~~';
		}  
	}); //ajax

} //axRSJoin1
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ** Join2
// => 모든 Data 포함, 기존 방식으로 요청하기
// => image 처리위해 "multipart/form-data" 적용	 
// => rsjoin1 요청과 비교하면 컨트롤러 에서는 consumes 속성값 변경, 매개변수의 @RequestBody 필요없음
//    만약 변경하지 않으면,
//	  ~.HttpMediaTypeNotSupportedException: Content type 'multipart/form-data;... 발생

function axRSJoin2() {
	// 1) Data 준비
	// => formData 를 JS 내장객체 FormData 에 담아서 전송 
	
	let formData = new FormData(document.getElementById('myForm'));
	console.log('** formData => '+formData);
	
	// 2) ajax 요청
	$.ajax({  
		type:'Post',
		url:'rest/rsjoin2',
		processData:false,
		contentType:false,
		data:formData,
		success:(resultData) => {
			// => 결과는 String 으로전달받음 
			document.getElementById('resultArea1').innerHTML=resultData;
			document.getElementById('resultArea2').innerHTML='';
		},
		error:() => {
			document.getElementById('resultArea2').innerHTML='~~ Ajax Join Error ~~';
		}  
	}); //ajax

} //axRSJoin2

// *** Rest API => Member Delete
function rsDelete(id) {
	console.log('** Rest Delete Test id => '+id);
	let url=`rest/rsdelete/${id}`;
	
	fetch(url, { method: 'DELETE' }) 
	.then(response => { 
							return response.text(); })
    .then(resData => console.log("** resData => "+resData))
    .catch(err => console.error(err));
	 
 } //rsDelete
 
/* ** ajax Code
	$.ajax({
 		type:'Delete',
 		url:`rest/rsdelete/${id}`,
 		success:(resultData) => {
 			
 			// => 삭제됨을 표시
 			alert(resultData);
 			
			// => jQuery
			$('#'+id).html('Deleted')  // $('#banana')
			.css({ 	color:'Gray',
					fontWeight:'bold' })
			.attr('onclick', null)
			.removeClass('textlink');			
 			$('#resultArea2').html('');
 		},
 		error: () => {
 			$('#resultArea2').html('~~ Error 발생 !!! ~~~');
 		}
 	}); //ajax
*/

