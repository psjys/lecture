package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


// ** @SpringBootApplication
// => 해당 클래스가 Springboot의 설정 클래스임을 명시하며
//    해당 클래스를 메인으로 실행됨
// => 해당 클래스가 있는 Package를 기본 Package로 간주함
//    그러므로 같은 Package 내의 클래스들은 Scan 됨.
//    ( 즉, @ComponentScan 을 이미 포함하고 있음 ) 

// ** @MapperScan(value={"mapperInterface"})
// => Mapper Interface 위치 설정

// ** @ComponentScan(basePackages={"service"})
// => 기본 Package 외의 Package 를 인식시켜 클래스를 Scan할 수 있도록함.  

@SpringBootApplication
@MapperScan(value={"mapperInterface"})
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	} //main

} //class
