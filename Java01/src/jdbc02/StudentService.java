package jdbc02;

import java.util.List;

// 연결해주는 역할
// 

public class StudentService {

	StudentDAO dao = new StudentDAO();

	// 1. selectList
	public List<StudentVO> selectList() {
//		dao.selectList() 의 sql 구문 처리결과를 받아 controller 로 전달 
		return dao.selectList();
	} // selectList

	// 2. selectOne : Detail
	public StudentVO selectOne(StudentVO vo) {
		return dao.selectOne(vo);
	} // selectOne

	// 3. insert
	public int insert(StudentVO vo) {
		return dao.insert(vo);
	} // insert

	// 4. update
	public int update(StudentVO vo) {
		return dao.update(vo);
	}

	// 5. delete
	public int delete(StudentVO vo) {
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

} // class
