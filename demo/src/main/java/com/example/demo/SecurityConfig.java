package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

// ** Spring Boot Security 기본설정 화일
// => spring-boot-starter-security 의 기본설정 disable
// => PasswordEncoder (구현클래스:BCryptPasswordEncoder) Bean 설정

// ** WebSecurityConfigurerAdapter
// => Deprecated 되어 사용불가능 ( java.io.FileNotFoundException 발생 )
//    SecurityFilterChain를 Bean으로 등록해서 사용해야 함.
//	 
/*
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Bean
	public PasswordEncoder getPasswordEncoder() {
      return new BCryptPasswordEncoder();
    }
   @Override
   protected void configure(HttpSecurity http) throws Exception {
      http.cors().disable()
         .csrf().disable()
         .formLogin().disable()
         .headers().frameOptions().disable();
   }
} //class
*/ 

//** @EnableWebSecurity
//=> 스프링 AutoConfiguration이며 우리가 쉽게 MVC Security 세팅을 할 수 있게 도와줌.
//   그러므로 설정파일을 의미하는 @Configuration 는 없어도 됨

//** SpringBoot Auto Configuration
//=> SpringBoot 가 자동으로 설정해줌을 의미 
//=> @EnableAutoConfiguration은 auto configuration 기능을 사용하겠다는 설정
//   @EnableAutoConfiguration을 설정하지 않으면 auto configuration 을 사용할 수 없음.
//=> SpringBoot 에는 다양한 Auto Configuration 이 있으며, 
//   @EnableWebSecurity 도 Securuty 자동설정을 사용한다는 의미임.

@EnableWebSecurity
public class SecurityConfig {
	
	@Bean
	public PasswordEncoder getPasswordEncoder() {
      return new BCryptPasswordEncoder();
    }
	
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.httpBasic().disable()
        		.formLogin().disable()
                .cors().disable()
                .csrf().disable()
                .build();
    } //filterChain
	
} //class
