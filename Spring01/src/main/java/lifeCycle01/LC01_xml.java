package lifeCycle01;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

//** Bean(객체) 의 LifeCycle
//=> 객체생성 -> 사용 -> 소멸
//=> 해당되는 특정시점에 자동실행 : xml, @, interface

//** Test1. xml
//=> xml 에 해당 시점별 속성에 등록
//    init-method="begin" destroy-method="end" 

class LifeCycleTest {
	public LifeCycleTest() { System.out.println("~~ LifeCycleTest 생성자 ~~");}
	public void begin() { System.out.println("~~ LifeCycleTest begin() ~~");}
	public void end() { System.out.println("~~ LifeCycleTest end() ~~");}
	public void login() { System.out.println("~~ LifeCycleTest login() ~~");}
	public void list() { System.out.println("~~ LifeCycleTest list() ~~");}
 } // LifeCycleTest 


public class LC01_xml {

	public static void main(String[] args) {
		AbstractApplicationContext sc = new 
				GenericXmlApplicationContext("lifeCycle01/lc01.xml");
		LifeCycleTest lc = (LifeCycleTest)sc.getBean("lc");
		lc.login();
		lc.list();
		sc.close();
	}

}
