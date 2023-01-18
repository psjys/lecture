package springTest;

import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import model.MemberDAO;
import vo.MemberVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class Ex01_SpringDAO {
	// ** 자동주입 : 생성은 root~~~.xml 로 설정
	// 객체가 여러개면 각각 하나씩 @Autowired 붙임 
	@Autowired
	MemberDAO dao;
	
	@Autowired
	MemberVO vo;
	
	@Test
	// 1) 자동주입과 Detail 정확성 
	public void detailTest() {
		// ** 자동주입 확인 
		System.out.println("** DAO 자동주입 확인 => " + dao);
		System.out.println("** VO 자동주입 확인 => " + vo);
		assertNotNull(dao); 
		
		vo.setId("banana"); // -> 있는 Data 
//		vo.setId("qwerty"); // -> 없는 Data
		assertNotNull(dao.selectOne(vo)); // Green  
		System.out.println("** vo => " + vo);
		
	} // detailTest 
	
	
	// 2) Insert 정확성
	// => 2회 실행 ( 1회는 green, 2회부터는 red -> ID 중복되므로 )   
	public void insertTest() {
		vo.setId("junit");
		vo.setPassword("12345!");
		vo.setName("유니트");
		vo.setAge(20);
		vo.setInfo("성공이냐 실패냐");
		vo.setJno(7);
		vo.setPoint(99.88);
		vo.setBirthday("1999-09-09");
		// -> 성공 : 1, 실패 : 0 
		
		assertEquals(dao.insert(vo), 1);
		
		
	} // insertTest 
}
