package aop01;

import java.util.Random;

public class Girl implements Programmer {

	@Override
	public void doStudying() {
		System.out.println("~~ 프로젝트 과제를 합니다 ~~ => Before");
		try {
			System.out.println("~~ 열심히 회원가입을 만듭니다 ~~ => 핵심적 관심사항");
			if(new Random().nextBoolean()) {
				// 실패
				throw new Exception("~~ 홀랑 다 날렸다 ㅠㅠ ~~ => 예외 발생");
				
			} else {
				// 성공
				System.out.println("~~ 회원가입이 잘 됩니다 ㅎㅎ ~~ => 핵심적 관심사항 정상 종료");
			}
			
		} catch (Exception e) {
			System.out.println("** Girl Exception => " + e.toString());
			System.out.println("~~ 밤새워 복구 합니다 zZ ~~ => 예외발생으로 핵심적관심사항 비정상종료");
			
		} finally {
			System.out.println("** finally : 무조건 제출 한다 ~~ => 아무튼 종료");
			
		}
	} // doStudying
	

} // class 
