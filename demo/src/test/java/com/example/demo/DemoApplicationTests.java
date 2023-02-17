package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import mapperInterface.MemberMapper;
import vo.MemberVO;

@RunWith(SpringRunner.class)
@SpringBootTest
class DemoApplicationTests {

	@Autowired
	private DataSource ds;
	@Autowired
	private SqlSessionFactory ssf;
	@Autowired
	private MemberMapper mapper;

	private MemberVO vo = new MemberVO();

	void contextLoads() throws SQLException {
		// Test1. DataSource
		System.out.println("** DataSource => " + ds);
		Connection cn = ds.getConnection();
		System.out.println("** Connection => " + cn);
		assertNotNull(cn);
		cn.close();
	}

	// Test2. SqlSessionFactory 연결확인
	// => SqlSessionFactory 만 자동주입 받으면 생성됨
	// => DataSource 선언 없어도 됨.
//	@Test
	void testSqlSession() throws Exception {
		System.out.println("** SqlSessionFactory => " + ssf);
		assertNotNull(ssf);
	}

	// Test3. Mapper
	// 3.1) insert
//	@Test
	void testInsert() {
		vo.setId("boot");
		vo.setPassword("12345!");
		vo.setName("스프링부트");
		vo.setAge(20);
		vo.setInfo("성공이냐 실패냐 ~~~");
		vo.setJno(7);
		vo.setPoint(99.88);
		vo.setRid("apple");
		vo.setBirthday("1999-09-09");
		// => 성공:1 , 실패:0
		assertEquals(mapper.insert(vo), 1);

	} // testInsert
	
	// 3.2) selectList 
//	@Test
	void testList() {
		System.out.println("** selectList Test **");
		for(MemberVO m : mapper.selectList() ) {
			System.out.println(m);
		}
		
 	} // testList
	
	// Test4. xml Mapper 
	@Test
	void testDetail() {
		vo.setId("boot");
		System.out.println("** selectOne Test **");
		System.out.println(mapper.selectOne(vo));
	} // testDetail 

} // class