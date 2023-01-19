package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mapperInterface.MemberMapper;
import vo.MemberVO;

//** interface 자동완성 
//=> Alt + Shift + T  
//=> 또는 마우스우클릭 PopUp Menu 의  Refactor - Extract Interface...

//** Service
//=> 요청클래스 와 DAO클래스 사이의 연결(완충지대) 역할
//=> 요청클래스(컨트롤러) 와 DAO클래스 사이에서 변경사항이 생기더라도 서로 영향 받지않도록해주는 역할
// 결합도는 낮추고, 응집도는 높인다

@Service
public class MemberServiceImpl implements MemberService {
//	MemberDAO dao = new MemberDAO();
//	=> IOC/DI 적용, @ 로 생성

//	@Autowired 
//	MemberDAO dao;

	// ** Mybatis interface 방식으로 적용
	// => MemberDAO 대신 MemberMapper 사용
	// => MemberMapper 의 인스턴스를 스프링이 생성해주고 이를 주입받아 실행함
	// 단, 설정화일에 <mybatis-spring:scan base-package="mapperInterface"/> 반드시 추가해야함
	// MemberDAO -> mapperInterface 사용으로 MemberMapper 가 역할 대신함

	@Autowired
	MemberMapper mapper; // dao 에서 인스턴스 이름만 바뀐 것

	// 1. selectList
	@Override
	public List<MemberVO> selectList() {
//		dao.selectList() 의 sql 구문 처리결과를 받아 controller 로 전달 
		return mapper.selectList();
	} // selectList

	// 2. selectOne : Detail
	@Override
	public MemberVO selectOne(MemberVO vo) {
		return mapper.selectOne(vo);
	} // selectOne

	// 3. insert
	@Override
	public int insert(MemberVO vo) {
		return mapper.insert(vo);
	} // insert

	// 4. update
	@Override
	public int update(MemberVO vo) {
		return mapper.update(vo);
	}

	// 5. delete
	@Override
	public int delete(MemberVO vo) {
		return mapper.delete(vo);
	}

}
