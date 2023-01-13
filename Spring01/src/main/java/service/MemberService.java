package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import model.MemberDAO;
import vo.GroupDTO;
import vo.MemberVO;

@Service 
public class MemberService {
//	MemberDAO dao = new MemberDAO();
//	=> IOC/DI 적용, xml 로 생성
	
	@Autowired
	MemberDAO dao;
	// 1. selectList
	public List<MemberVO> selectList() {
//		dao.selectList() 의 sql 구문 처리결과를 받아 controller 로 전달 
		return dao.selectList();
	} // selectList

	// 2. selectOne : Detail
	public MemberVO selectOne(MemberVO vo) {
		return dao.selectOne(vo);
	} // selectOne

	// 3. insert
	public int insert(MemberVO vo) {
		return dao.insert(vo);
	} // insert

	// 4. update
	public int update(MemberVO vo) {
		return dao.update(vo);
	}

	// 5. delete
	public int delete(MemberVO vo) {
		return dao.delete(vo);
	}

	// 6. groupTest
	public List<GroupDTO> groupTest() {
		return dao.groupTest();
	} // groupTest

	// 7. Transaction Test
	public void transactionTest() {
		dao.transactionTest();
		// void니까 return 지정 안 해도 됨 
	} // transactionTest
}
