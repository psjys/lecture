package controllerM;

import java.util.List;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

import service.MemberService;
import vo.MemberVO;


// ** Member 에 DI 적용하기
// => MemberService : xml로 생성 후 getBean("ms") 
// => MemberDAO : xml로 생성 후 @Autowired


public class MemberDITest {

	public static void main(String[] args) {
		AbstractApplicationContext sc = new 
				GenericXmlApplicationContext("controllerM/member.xml");
		MemberService service = (MemberService)sc.getBean("ms");
	      List<MemberVO> list = service.selectList();
	      for ( MemberVO m:list ) {
	         System.out.println(m);
	      }
		sc.close();
	
	}

}
