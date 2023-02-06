/**
 *  ** AjaxTest 02
    => 반복문에 이벤트 적용하기
    => axmlist : id별로 board조회, 관리자기능 (delete 버튼), Image(File)Download 
    => axblist : 상세글 보기
 */

// ** axmlist 
"use strict";
function axmlist() {
    $.ajax({
        type: 'Get',
        url: 'axmlist',
        success: (resultPage) => {
            $('#resultArea1').html(resultPage);
        },
        error: ()=> {
            $('#resultArea1').html('Error 발생')
        }
    }); // ajax
    $('#resultArea2').html('');
} // axmlist