package aop03;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		
		// ** IOC / DI 적용 가능 -> 자동화를 위해 
		// => 다형성 적용!! : 소스코드 수정 없이 클래스 교체 가능 
		System.out.println("** IOC/DI 적용 **");
		// 스프링 컨테이너
		AbstractApplicationContext sc = 
				new GenericXmlApplicationContext("aop03.xml");
		
		Programmer programmerB = (Programmer)sc.getBean("boy");
		Programmer programmerG = (Programmer)sc.getBean("girl");
		
		try {
			System.out.println("** Boy Test **");
			programmerB.doStudying();
			
			System.out.println("\n** Girl Test **");
			programmerG.doStudying();
			
		} catch (Exception e) {
			System.out.println("\n** main Exception =>" +e.toString());
		}
		
		sc.close();
		
	} // main

} // class
