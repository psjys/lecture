const modal =$(".content>.contentDetail");
const checkbox = $("#eventAgreement");
const nextBtn= $("#nextBtn");
const submitBtn = $("#submitBtn");

nextBtn.on("click",function(){

    if(checkbox.is(":checked")){
        //체크가 되어있을 때
        console.log(checkbox);
        modal.eq(0).hide();
        modal.eq(1).show();
        
    }else{
        alert("약관에 동의하세요");
    }
});

$("#submitBtn").on("click",function(event){
    //이름 유효성
    const name = $("#name");
    const nameReg = /^[가-힣]{2,7}$/;
    const nameValue = name.val();
    const nameComment = name.next();

    if(nameReg.test(nameValue)){
        //유효성 만족
        nameComment.text("사용 가능합니다.");
        nameComment.css("color","blue");
    }else{
        //유효성x
        nameComment.text("이름은 한글 2~7자리 이내로 입력해주세요.");
        nameComment.css("color","red");
        event.preventDefault();
    }
    //생년월일
    const birth= $("#birth");
    const birthReg = /^[0-9]{6}$/;
    const birthVal = birth.val();
    const birthComment = birth.next(); //span부분

    if(birthReg.test(birthVal)){
        //유효성 만족했을 때
        console.log("사용 가능");
        birthComment.text("사용 가능합니다.");
        birthComment.css("color","blue");
    }else{
        console.log("유효성 불가");
        birthComment.text("생년월일이 6자리인지 확인해주세요.");
        birthComment.css("color","red");
        event.preventDefault();
    }

    //전화번호 
    const phoneReg1 = /^[0-9]{3}$/
    const phoneReg2 = /^[0-9]{3,4}$/;
    const phoneReg3 = /^[0-9]{4}$/;

    const phone1 = $("#phone1 option:selected");
    const phone2 = $("#phone2");
    const phone3 = $("#phone3");


    const phoneValue1 = phone1.val();
    const phoneValue2 = phone2.val();
    const phoneValue3 = phone3.val();

    console.log("phon1 : "+phoneValue1);

    const phoneComment = phone3.next();

    if( phoneReg1.test(phoneValue1) && phoneReg2.test(phoneValue2) && phoneReg3.test(phoneValue3)){
        //3칸 모두 유효성 만족 시 
        phoneComment.text("응모 가능한 전화번호입니다.");
        phoneComment.css("color","blue");
    }else{
        phoneComment.text("번호를 다시 한번 확인해주세요.");
        phoneComment.css("color","red");
        event.preventDefault();
    }

    if(nameReg.test(nameValue) && birthReg.test(birthVal) && 
    phoneReg1.test(phoneValue1) && phoneReg2.test(phoneValue2) && phoneReg3.test(phoneValue3))
    alert("응모 완료!");
});

const modalclose = $("#modalcloseBtn");

//close버튼 눌렀을 때 안보이게
modalclose.on("click",function(){
    $("#event-modal").css("display","none");
    modal.eq(1).hide();
    modal.eq(0).show();
    // checkbox.attr("checked", false);
    document.getElementById("eventAgreement").checked = false;

});

const eventImg = $("#sub");

eventImg.on("click",function(){
    $("#event-modal").css("display","block");
});

