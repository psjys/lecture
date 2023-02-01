package aop03;

import org.aspectj.lang.ProceedingJoinPoint;

//** 횡적(공통)관심사항 ( cross concerns => Aspect ) 구현
//=> Boy, Girl : 핵심 관심사항 (core concerns) 만 구현하면 됨.
//=> 횡적(공통)관심사항 과 핵심관심사항 의 연결 방법 xml, @ 방식

//** xml 방식의 공통적 관심 사항 구현 2 
//=> pointcut : 매개변수, return 값 없음  
//=> Around 메서드 구현
// 	 Before, After_returning, After_throwing, After 
//	 을 1개의 메서드에서 try~catch~finally 를 이용해서 처리

//=> Around 메서드 특징
//-> Aspect 와 Pointcut의 모든 Joinpoint를 아우르는 연결고리 
//-> 반드시 ProceedingJoinPoint 타입을 인자로 사용하여 
// pointcut을 처리 (그렇지 않으면 오류)
// joinPoint.proceed(); 로 핵심적 관심사항을 처리함

//** ProceedingJoinPoint : JoinPoint 를 상속 했으며 proceed() 메서드를 가짐
//=> JoinPoint (I) -> ProceedingJoinPoint (I) -> JoinPointImpl
//=> 예외상황 처리시에  Throwable 사용해야됨.
// 계층도 : Object -> Throwable -> Error, Exception -> RuntimeException (unChecked)

//** JoinPoint 
//=> PointCut 을 지원해주는 클래스 (다양한 지원 메서드를 가지고 있음-> 매개변수 전달 등.. )
//=> 핵심적 관심사항으로 들어가는 모든 데이터 (before를 통해) 사항을
// 가지고 있으며 처리할 수 있도록 해줌


public class MyAspect {
	
	public void myAround(ProceedingJoinPoint joinpoint) {
		// Before
		System.out.println("~~ 프로젝트 과제를 합니다 ~~ => Before");
		try {
			// 핵심 기능 수행 (pointCut 전달)
			// => Around 메서드의 매개변수(ProceedingJoinPoint Type)를 통해 전달받아 수행
			joinpoint.proceed(); // Throwable 쓰게 설계됨 : exception -> Throwable로 변경
	        // => Throwable 로 예외처리를 해야함
	        //    Throwable - Exception - RuntimeException (unchecked), IOException (checked)
			//				- Error 
			
			
			// After_returning : 핵심적 관심사항 정상 종료
			System.out.println("~~ 글 등록이 잘 됩니다 ㅎㅎ ~~ => 핵심적 관심사항 정상 종료");
			
		} catch (Throwable e) {
			// After_throwing : 예외발생으로 핵심적 관심사항 비정상종료
			System.out.println("~~ 밤새워 복구 합니다 zZ ~~ => 예외발생으로 핵심적관심사항 비정상종료");
			
	        // => 발생된 예외를 Throwable로 처리(처리&종료) 했으므로 main까지 전달되지않음 (확인후 Test)
	        // => main으로 전달하려면 예외발생시켜주면됨.
	        // throw new Exception(e) ;  // Exception 은 Checked -> try~catch 처리 해야함
			throw new RuntimeException(e); // unChecked 
			
		} finally {
			// After : 정상 종료이건 비정상 종료이건 무조건 시행
			System.out.println("** finally : 무조건 제출 한다 ~~ => 아무튼 종료");
			
		}
		
	} // myAround
	
	
} // class 
