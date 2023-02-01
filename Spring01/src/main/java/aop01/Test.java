package aop01;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		
		// ** Java 기초
		// => 다형성 적용 불가, 클래스 교체 시 소스코드 수정이 필요 
		Boy boy = new Boy();
		Girl girl = new Girl();
		boy.doStudying();
		girl.doStudying();
		
		// ** IOC / DI 적용 -> 자동화를 위해 
		// => 공통조상이 필요함 (interface 사용)
		// => 다형성 적용!! : 클래스 교체 시 소스코드 수정 없이 가능 
		System.out.println("** IOC/DI 적용 **");
		// 스프링 컨테이너
		AbstractApplicationContext sc = 
				new GenericXmlApplicationContext("aop01.xml");
		Programmer programmerB = (Programmer)sc.getBean("boy");
		Programmer programmerG = (Programmer)sc.getBean("girl");
		
		programmerB.doStudying();
		programmerG.doStudying();
		
	} // main

} // class
