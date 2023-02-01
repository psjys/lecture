package aop04;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		
		// ** IOC / DI 적용 가능 -> 자동화를 위해 
		// => 다형성 적용!! : 소스코드 수정 없이 클래스 교체 가능 
		System.out.println("** IOC/DI 적용 **");
		// 스프링 컨테이너
		AbstractApplicationContext sc = 
				new GenericXmlApplicationContext("aop04.xml");
		
		Programmer programmerB = (Programmer)sc.getBean("boy");
		Programmer programmerG = (Programmer)sc.getBean("girl");
		
		try {
			System.out.println("** Boy Test **");
			System.out.println("** Boy 의 결과 => " + programmerB.doStudying(10));

			
			System.out.println("\n** Girl Test **");
			System.out.println("\n** Girl 의 결과 => "+programmerG.doStudying(10));
			
		} catch (Exception e) {
			System.out.println("\n** main Exception =>" +e.toString());
		}
		
		sc.close();
		
	} // main

} // class
