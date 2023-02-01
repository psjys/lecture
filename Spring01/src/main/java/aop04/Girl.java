package aop04;

import java.util.Random;

//** Aop 구현
//1 단계 : 핵심적 관심사항 과  공통적 관심사항 분리
//=> 핵심적 관심사항만 구현
//=> 공통적 관심사항(Aspect) 분리 : 별도의 클래스로 분리 -> MyAspect.java

public class Girl implements Programmer {

	@Override
	public String doStudying(int n) throws Exception {
		System.out.println("~~ 열심히 회원가입을" +n+"개 만듭니다 ~~ => 핵심적 관심사항");
		
	    // ** Test 를 위해 늘 실패로 처리
	    // => 늘 true 값이 되도록 조건을 설정 
		
		//if(new Random().nextBoolean()) {
		if( true ) {
			throw new Exception("~~ 홀랑 다 날렸다 ㅠㅠ ~~ => 예외 발생");
		}
		return "취업 성공 연봉 1억";
	} // doStudying
	

} // class 
