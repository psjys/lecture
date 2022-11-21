//------------------------------------------------------메인 

const ul = $(".slide-wrap>ul");
const lastImg =ul.children().last().clone(); 
ul.prepend(lastImg); 
const firstImg = ul.children().eq(1).clone(); 
ul.append(firstImg);
const imgCount = ul.children().length;
const width=1200;
ul.css("width",(width*imgCount)+"px");

let imgNo = 1;
ul.css("transform","translateX("+(imgNo*-1200)+"px)");
let intervalId;

$(".prev").on("click",function(){
    if(imgNo != 0){
        clearInterval(intervalId); 
        imgNo--;
        const move =-imgNo*width;
        ul.css("transform","translateX("+move+"px)").css("transition-duration","1s");
        if(imgNo==0){
            imgNo=imgCount-2; 
            setTimeout(function(){
            const move =-imgNo*width;
            ul.css("transform","translateX("+move+"px)")
            .css("transition-duration","0s");
            },1000);
        }
        autoSlide(); 
    }
});

$(".next").on("click",function(){
    if(imgNo != imgCount-1){
        clearInterval(intervalId); 
        imgNo++;
        const move = -imgNo*width;
        ul.css("transform","translateX("+move+"px)").css("transition-duration","1s");
        if(imgNo==imgCount-1){
            imgNo=1;
            setTimeout(function(){
                const move = -imgNo*width;
                ul.css("transform","translateX("+move+"px)").css("transition-duration","0s");
            },1000);
        }
        autoSlide(); 
    }
});

function autoSlide(){
    intervalId=setInterval(function(){
        $(".next").click(); 
    },3*1000);
}

autoSlide(); 

$(".img1").on("click",function(){
    $(".modal-wrap").css("display","flex");
    $(".modal1").css("display","flex");
    $(".modal2").css("display","none");
    $(".modal3").css("display","none");
    
});

$(".img2").on("click",function(){
    $(".modal-wrap").css("display","flex");
    $(".modal1").css("display","none");
    $(".modal2").css("display","flex");
    $(".modal3").css("display","none");
});

$(".img3").on("click",function(){
    $(".modal-wrap").css("display","flex");
    $(".modal1").css("display","none");
    $(".modal2").css("display","none");
    $(".modal3").css("display","flex");
});

$(".material-symbols-outlined").on("click",function(){
    $(".modal-wrap").css("display","none");
});

//------------------------------------------------------FAQ 메뉴
$(".faq-question").on("click",function(){
    const answers = $(".faq-answer");
    const faqMore = $(".faq-more");
    const faqLess = $(".faq-less");
    const index = $(".faq-question").index(this);
    const faqStat=faqLess.eq(index).css("display");
    if(faqStat=="none"){
        answers.eq(index).css("display","table-row");
        faqLess.eq(index).css("display","inline-block");
        faqMore.eq(index).css("display","none");
    }else{
        answers.eq(index).css("display","none");
        faqLess.eq(index).css("display","none");
        faqMore.eq(index).css("display","inline-block");
    }
});