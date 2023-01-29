package spring.aop.advice;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;

public class LogAroundAdvice implements MethodInterceptor {

	@Override
	public Object invoke(MethodInvocation invocation) throws Throwable {
		// 곁다리 업무 
		long start = System.currentTimeMillis();
		
		// 주업무를 호출 
		Object result = invocation.proceed();
		
		// 곁다리 업무
		long end = System.currentTimeMillis();

		String message = (end - start) + "ms 시간이 걸렸습니다";
		System.out.println(message);

		return result;
	}

}
