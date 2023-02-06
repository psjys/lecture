/*  ** Ajax_Test01 
 *  => MousePointer, axLogin, jsLogin 
 */

"use strict";

// ** axloginf
function axloginf() {
    $.ajax({
        type: 'Get',
        url: 'mlogin',
        success: function (resultPage) {
            document.getElementById('resultArea').innerHTML = resultPage;
        },
        error: function () {
            document.getElementById('resultArea').innerHTML = 'error 발생';
        }
    }); // ajax
} // axloginf

// ** axlogin 기능 
function axlogin() {
    $.ajax({
        type: 'Post',
        url: 'mlogin',
        data: {
            id: $('#id').val(),
            password: $('#password').val()
        },
        success: function (resultPage) {
            $('#resultArea').html(resultPage);
        },
        error: function () {
            $('#resultArea').html('error 발생');
        }
    }); // ajax
} // axloginf

// ** jslogin 기능 -> response : JsonData
function jslogin() {
    $.ajax({
        type: 'Post',
        url: 'jslogin',
        data: {
            id: $('#id').val(),
            password: $('#password').val()
        },
        success: function (resultData) {
            // => JsonData 를 전달 받음 
            // => 컨트롤러의 처리 결과를 전달받아 성공/실패 구분 가능 
            if (resultData.code == 200) {
                $('#resultArea').html('');
                location.reload();
            } else {
                $('#message').html(resultData.message);
                if (resultData.code == 201) $('#id').focus();
                else $('#password').focus();
            }
        },
        error: function () {
            $('#resultArea').html('error 발생');
        }
    });
}

// ** Ajax Join ***************************************

function axjoinf() {
    $.ajax({
        type: 'Get',
        url: 'mjoin',
        success: function (resultPage) {
            $('#resultArea1').html(resultPage);
            $('#resultArea2').html('');
        },
        error: function () {
            $('#resultArea1').html('error 발생');
        }
    }); // ajax
    $('#resultArea2').html('');
} // axjoinf

// ** Ajax Join
// => form Data 전송방법 : 특히 fileUpload 가 있는 경우 
// 1) Form 의 serialize()
// => input Tag 의 name 과 id 가 같아야 함.   
// => 직렬화 : multipart 타입은 전송안됨. 
//           처리하지 못하는 값(예-> file Type) 은 스스로 제외시킴 
// => var formData = $('#myForm').serialize();

// 2) 객체화   
// => 특정 변수 (객체형) 에 담기      
// => 특별한 자료형(fileType: UpLoadFilef) 적용안됨.   
/*
    formData = {
        id:$('#id').val(),
        password:$('#password').val(),
        name:$('#name').val(),
        info:$('#info').val(),
        birthday:$('#birthday').val(),
        jno:$('#jno').val(),
        age:$('#age').val(),
        point:$('#point').val()
        image (file) 는 적용할 수 없음 
    }*/

// 3) FormData 객체 활용
// => 모든 자료형의 특성에 맞게 적용가능하여 이미지등의 file 업로드가 가능한 폼데이터 처리 객체
// => IE10부터 부분적으로 지원되며, 크롬이나 사파리, 파이어폭스같은 최신 브라우져에서는 문제 없이 동작
// => 3.1) append 메서드
//   let formData = new FormData();
//    formData.append(id,$('#id').val());
//    formData.append(password,$('#password').val());......

// => 3.2) 생성자 매개변수 이용
// let formData = new FormData(document.getElementById('myForm'));
// let formData = new FormData($('#myForm')[0]); // OK: JS의 노드로 인식

// ** 관련속성   
// => form Tag 
//      enctype 속성: 'multipart/form-data'  
//     method: 'Post'
// => ajax 속성
//      method: 'Post','
//      enctype: 'multipart/form-data', // form Tag 에서 지정하므로 생략 가능
//      processData:false, // false로 선언시 formData를 string으로 변환하지 않음
//      contentType:false, // false로 선언시 content-type 헤더가 multipart/form-data로 전송되게 함

function axjoin() {
    // 1) formData 처리
    let formData = new FormData(document.getElementById('myForm'));

    // 2) ajax 요청
    $.ajax({
        type: 'Post',
        url: 'mjoin',
        processData: false,
        contentType: false,
        data: formData,
        success: function (resultPage) {
            $('#resultArea1').html(resultPage);
        },
        error: function () {
            $('#resultArea1').html('error 발생');
        }
    }); // ajax
    $('#resultArea2').html('');
} // axjoin
