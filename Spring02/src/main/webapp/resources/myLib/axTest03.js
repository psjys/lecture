/* ** Ajax_REST API Test ** 
    => axRSJoDetail 
*/

// ** axloginf
// => axRSJoDetail 처리를 위한 준비
//    axTestForm 에 rsLogin 추가
function rsLogin() {
    $.ajax({
        type: 'Get',
        url: 'mlogin',
        success: function (resultPage) {
            $('#resultArea1').html(resultPage);
        },
        error: function () {
            $('#resultArea1').html('~~ Error 발생 !!! ~~~');
        }
    }); //ajax
}; //rsLogin

// ** axRSJoDetail
// => loginForm 의 password 를 jno 값으로 활용   
// => 컨트롤러에서는 @PathVariable , ResponseEntity 적용 
//    @PathVariable 적용을 위해 Get방식, jno를 int 로 처리함.
//    경로의 일부로 Data 를 전달 
// => Response 는 JSON Type Data 로 받는다. 

// ** Test
// => rsDetail1 : ResponseEntity 적용 안 함
// => rsDetail2 : ResponseEntity 적용함 
function rsDetail() {
    let id = document.getElementById('id').value;
    let jno = parseInt(document.getElementById('password').value);
    console.log(`** id=${id},  jno=${jno}`);

    $.ajax({
        type: 'Get',
        url: `rest/rsdetail2/${id}/${jno}.json`,
        // => "rest/rsdetail1/banana/7"
        // => Response 로 JSON Type Data 를 요청함 
        //    .json 없으면 XML 형식으로 전달됨.
        success: (resultData) => {
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
            $('#resultArea2').html('~~ Ajax 요청 Error : 자료 없음 ~~');
        }
    }); //ajax
} //rsDetail

// *** Rest API => Member Join
// ** Join1 : fileupload 제외, formData 를 JS 객체 -> JSON type 으로 전송 
function axRSJoin1() {
    // 1) Data 준비 
    // => formData 를 JS 객체
    let formData = {
        id: document.getElementById('id').value,
        password: document.getElementById('password').value,
        name: document.getElementById('name').value,
        info: document.getElementById('info').value,
        birthday: document.getElementById('birthday').value,
        jno: document.getElementById('jno').value,
        age: document.getElementById('age').value,
        point: document.getElementById('point').value,
    }

    // => JS객체 -> JSON Type 으로
    //let formData = new FormData(document.getElementById('myForm'));
    //let formData = $('#myForm').serialize();
    // => 위 둘은 JSON.stringify 적용 안됨

    let jsonData = JSON.stringify(formData);

    // => 비교 출력 확인 
    console.log('** formData => ' + formData);
    console.log('** jsonData => ' + jsonData);

    // 2) ajax 요청 
    $.ajax({
        type: 'post',
        url: 'rest/rsjoin1',
        data: jsonData, // JSON Type 
        contentType: 'application/json',
        // => JSON Type Data 요청
        // => form 의 enctype="multipart/form-data" 과 무관하게 우선 적용됨      
        success: (resultData) => {
            // => 결과는 String 으로 전달 받음 
            document.getElementById('resultArea1').innerHTML = resultData;
            document.getElementById('resultArea2').innerHTML = '';
        },
        error: () => {
            document.getElementById('resultArea2').innerHTML = '~~ Ajax Join Error ~~';
        }
    }); // ajax

} // axRSJoin1 


// ** Join2
// => 모든 Data 포함, 기존 방식으로 요청하기
// => image 처리위해 "multipart/form-data" 적용    
// => rsjoin1 요청과 비교하면 컨트롤러 에서는 consumes 속성값 변경, 매개변수의 @RequestBody 필요없음
//    만약 변경하지 않으면,
//     ~.HttpMediaTypeNotSupportedException: Content type 'multipart/form-data;... 발생
function axRSJoin2() {
    // 1) Data 준비 
    // => formData 를 JS 내장객체 FormData 에 담아서 전송 
    let formData = new FormData(document.getElementById('myForm'));
    console.log('** formData => ' + formData);

    // 2) ajax 요청 
    $.ajax({
        type: 'post',
        url: 'rest/rsjoin2',
        processData: false,
        contentType: false,
        data: formData,
        success: (resultData) => {
            // => 결과는 String 으로 전달 받음 
            document.getElementById('resultArea1').innerHTML = resultData;
            document.getElementById('resultArea2').innerHTML = '';
        },
        error: () => {
            document.getElementById('resultArea2').innerHTML = '~~ Ajax Join Error ~~';
        }
    }); // ajax

} // axRSJoin2