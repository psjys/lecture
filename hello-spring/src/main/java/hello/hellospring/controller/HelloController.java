package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
    // /hello 하면 이 메서드를 호출해줌
    @GetMapping ("hello")
    public String hello (Model model) {
        model.addAttribute("data", "여긴데이터!!");
        return "hello";
    }

    @GetMapping("hell-mvc")
    public String helloMvc (@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "hello-template";
    }

    @GetMapping("hello-string")
    @ResponseBody
    public String helloString (@RequestParam("name") String name) {
        // body 부에 내가 직접 데이터를 넣어주겠다
        return "hello " + name; // "hello Spring" 출력
    }

    @GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi (@RequestParam("name") String name) {
        Hello hello = new Hello();
        hello.setName(name);

        return hello;
    }
    static class Hello {
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
