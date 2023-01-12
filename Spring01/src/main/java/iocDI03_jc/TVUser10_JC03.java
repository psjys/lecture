package iocDI03_jc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;
import org.springframework.stereotype.Component;

//** TV 의 의존성 처리 @ 방식
//=> TV 는 여러개의 Speaker 를 사용할 수 있음 
//=> Speaker interface 적용 
//=> 생성자 주입, setter 주입

//=> 여러개 중 선택 : 명시적 자동주입 
//@Autowired , @Qualifier("spa")

//** Test1) : spa, spb 생성후 @Autowired 만 한 경우 
//...UnsatisfiedDependencyException: Error creating bean with name 'tva': Unsatisfied 
//....matching bean but found 2: spa,spb
//** Test2) : spa 만 생성후 @Autowired 만 한 경우 
//=> Type 일치하는 경우가 1개이기 때문에 정상실행

//=> xml, @ 병행 가능
//Speaker 의 생성은 xml 에 <bean ..> 등록후 Test

interface Speakeri {
	void volumeUp();

	void volumeDown();
} // Speakeri

//** xml 에서 JC 사용  Test ( TVUser11 에서 )
//=> 1) SpeakerA xml 에서 생성후 AiTVsi 에서 @Autowired
//=> 2) @ 으로 생성후  AiTVsi 에서 @Autowired
@Component
class SpeakerA implements Speakeri {
	public SpeakerA() {
		System.out.println("~~ SpeakerA Default 생성자 ~~");
	}

	@Override
	public void volumeUp() {
		System.out.println("~~ SpeakerA volumeUp ~~");
	}

	@Override
	public void volumeDown() {
		System.out.println("~~ SpeakerA volumeDown ~~");

	}

} // SpeakerA

@Component ("spb")
class SpeakerB implements Speakeri {
	public SpeakerB() {
		System.out.println("~~ SpeakerB Default 생성자 ~~");
	}

	@Override
	public void volumeUp() {
		System.out.println("~~ SpeakerB volumeUp ~~");
	}

	@Override
	public void volumeDown() {
		System.out.println("~~ SpeakerB volumeDown ~~");
	}
} // SpeakerB

// 1) 고전적 방법 (직접 new : 소스 재컴파일)
// -> SpeakerA, B 교체 : 직접 코드에서

class SsTVsi implements TV {
	private Speakeri speaker = new SpeakerA();

	public SsTVsi() {
		System.out.println("~~ SsTVi Default 생성자 ~~");
	}

	@Override
	public void powerOn() {
		System.out.println("~~ SsTVi powerOn");
	}

	@Override
	public void powerOff() {
		System.out.println("~~ SsTVi powerOff");
	}

	// volumeUP, Down 은 스피커에게 맡김
	@Override
	public void volumeUp() {
		speaker.volumeUp();
	}

	@Override
	public void volumeDown() {
		speaker.volumeDown();
	}

} // SsTVsi

// 2) IOC / DI -> 생성자 주입
class LgTVsi implements TV {
	private Speakeri speaker;
	private String color;
	private int price;

	public LgTVsi() {
		System.out.println("~~ LgTVs Default 생성자 ~~");
	}

	public LgTVsi(Speakeri speaker, String color, int price) {
		this.speaker = speaker;
		this.color = color;
		this.price = price;
		System.out.println("~~ LgTVsi 초기화 생성자 color, price => " + color + price);
	}

	@Override
	public void powerOn() {
		System.out.println("~~ LgTVsi powerOn");
	}

	@Override
	public void powerOff() {
		System.out.println("~~ LgTVsi powerOff");
	}

	@Override
	public void volumeUp() {
		speaker.volumeUp();
	}

	@Override
	public void volumeDown() {
		speaker.volumeDown();
	}

} // LgTVs

// 3) IOC / DI : JC 와 @ Test 
// => TV, SpeakerB 는 JC에서 생성하고
//	  @Autowired 로 주입 받음 

class AiTVsi implements TV {
	@Autowired(required = false)
	@Qualifier("spa")
	private Speakeri speaker;
	private String color;
	private int price;

	public AiTVsi() {
		System.out.println("~~ AiTVsi Default 생성자 ~~");
	}

	public void setSpeaker(Speakeri speaker) {
		this.speaker = speaker;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	@Override
	public void powerOn() {
		System.out.println("~~ AiTVsi powerOn ~~ color, price => " + color + price);
	}

	@Override
	public void powerOff() {
		System.out.println("~~ AiTVsi powerOff");
	}

	@Override
	public void volumeUp() {
		speaker.volumeUp();
	}

	@Override
	public void volumeDown() {
		speaker.volumeDown();
	}

} // LgTVs

public class TVUser10_JC03 {
	public static void main(String[] args) {
		// 1. 스프링 컨테이너 구동 (생성)
		AbstractApplicationContext sc = new 
				AnnotationConfigApplicationContext(JavaConfig03.class);

		// 2. 필요한 객체를 전달받고 서비스 실행
		System.out.println("** Test1. 고전적 방법 (직접 new) **");
		TV tvs = (TV) sc.getBean("tvs");
		tvs.powerOn();
		tvs.volumeUp();
		tvs.volumeDown();
		tvs.powerOff();

		System.out.println("** Test2. IOC/DI -> 생성자 주입 **");
		TV tvl = (TV) sc.getBean("tvl");
		tvl.powerOn();
		tvl.volumeUp();
		tvl.volumeDown();
		tvl.powerOff();

		System.out.println("** Test3. IOC/DI -> setter 주입 **");
		TV tva = (TV) sc.getBean("tva");
		tva.powerOn();
		tva.volumeUp();
		tva.volumeDown();
		tva.powerOff();

		System.out.println("** Program 종료 **");
		sc.close();

	} // main

} // class
