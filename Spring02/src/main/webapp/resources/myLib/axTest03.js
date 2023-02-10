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
