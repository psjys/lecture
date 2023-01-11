package iocDI02_anno;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;
import org.springframework.stereotype.Component;

//** Annotation, @, 애너테이션
//=> 컴파일러에게 알려줌 (지시어)

//** @ Annotation 애너테이션 활용방법 *********************

//1. xml 에 context 네임스페이스 추가 [NameSpaces] 이용
//=> Component-scan 설정  : 
// <context:component-scan base-package="d0714.iocEx05" />
//  
//2. 소스코드 
//=> import 확인  : org.springframework.context.support.*;
//=> 생성을 원하는 TV 클래스 위에 @Component("tv") 설정

//=> @Component("tv") 
// <bean ....> </bean> -> xml
// new 생성자() -> Java Code

//3.Test : 오류 메시지 확인 하기
//=> @ Test1 생성 -> <bean ... />
//=> @ Test2 id명 미 지정(둘다 beanname 없이) 
//=> ...NoSuchBeanDefinitionException: 
//  No bean named 'tv' is defined ....
//=> @ Test3 id명 중복되는 경우 (둘다 beanname  ("tv") 지정 )  
//=> ...annotation.ConflictingBeanDefinitionException: ....
//  ...non-compatible bean definition of same name and class ...

interface TV {
	void powerOn();

	void powerOff();

	void volumeUp();

	void volumeDown();
} // interface

//@Component("tv")
class SsTVi implements TV {

	public SsTVi() {
		System.out.println("~~ SsTVi Default 생성자 ~~");
	}

	@Override
	public void powerOn() {
		System.out.println("~~ SsTVi powerOn ~~");
	}

	@Override
	public void powerOff() {
		System.out.println("~~ SsTVi powerOff ~~");
	}

	@Override
	public void volumeUp() {
		System.out.println("~~ SsTVi volumeUp ~~");
	}

	@Override
	public void volumeDown() {
		System.out.println("~~ SsTVi volumeDown ~~");
	}

	public void ssTest() {
		System.out.println("~~ SsTVi ssTest ~~");
	}
} // SsTVi

class LgTVi implements TV {

	public LgTVi() {
		System.out.println("~~ LgTVi Default 생성자 ~~");
	}

	@Override
	public void powerOn() {
		System.out.println("~~ LgTVi powerOn ~~");
	}

	@Override
	public void powerOff() {
		System.out.println("~~ LgTVi powerOff ~~");
	}

	@Override
	public void volumeUp() {
		System.out.println("~~ LgTVi volumeUp ~~");
	}

	@Override
	public void volumeDown() {
		System.out.println("~~ LgTVi volumeDown ~~");
	}

	public void lgTest() {
		System.out.println("~~ LgTVi lgTest ~~");
	}
} // LgTVi

public class TVUser05_Anno01 {

	public static void main(String[] args) {
		// 1. 콩공장 (BeanFactory, 스프링 컨테이너) 생성
		AbstractApplicationContext sc = new GenericXmlApplicationContext("iocDI02_anno/app05.xml"); // 자바 어플리케이션에서 많이 쓰는
																									// 컨테이너
		// => 설정파일(xml 구문 요구사항 목록) 을 매개변수로 전달
		// => GenericXmlApplicationContext("app02.xml");
		// xml 문을 "src/main/resources" 에 두면 패키지는 생략가능

		// 2. 필요한 객체를 전달받고 서비스 실행
		// => 필요한 객체를 설정화일(app02.xml) 을 이용해서 Spring 컨테이너에게 요청

		// => Spring 컨테이너는 getBean 메서드를 실행해서 해당객체를 제공
		// => 실시간으로 소스코드 수정없이 전달받음

		TV tv = (TV) sc.getBean("tv");
		if (tv != null) {
			tv.powerOn();
			tv.volumeUp();
			tv.volumeDown();
			tv.powerOff();
		} else {
			System.out.print("** TV를 선택하지 않음 **");
		}
		// 3. singleton(싱글톤) Test
		// => 스프링 프레임웤의 모든 작업은 싱글톤을 기본으로함.
		// => 싱글톤 (한개의 인스턴스만 허용 하는것) 적용 Test
		System.out.println("** singleton(싱글톤) Test **");
		TV tvl = (TV) sc.getBean("tv");
		TV tvs1 = (TV) sc.getBean("tvs");
		TV tvs2 = (TV) sc.getBean("tvs");

		// Test 3.1) default : 모두 싱글톤
		// => 모두 생성자는 1회만 실행, 클래스(TV)별 로 동일주소값
		System.out.println("** tv(lg) => " + tv);
		System.out.println("** tv1(lg) => " + tvl);
		System.out.println("** tvs1(ss) => " + tvs1);
		System.out.println("** tvs2(ss) => " + tvs2);

		// Test 3.2) prototype / singleton 모두 지정후 비교
		// => SsTVi 는 scope = "prototype" 으로 지정
		// SsTVi 는 생성자 2회, 주소값도 서로 다름
		// (위의 출력에서 확인 비교)

		sc.close();
	} // main

} // class
