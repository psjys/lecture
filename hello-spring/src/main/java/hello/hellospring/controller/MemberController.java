package hello.hellospring.controller;

import hello.hellospring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class MemberController {
    private final MemberService memberService;

    @Autowired
    // 스프링 컨테이너와 memberService 를 연결해줌
    // -> memberservice에 @Service / memberRepository에 @repository 를 넣어줘야함
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
}
