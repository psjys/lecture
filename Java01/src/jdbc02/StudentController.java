package jdbc02;

import java.util.List;

// ** Controller
// -> 요청 받아서 해당 서비스를 처리 한 후 결과 출력 

public class StudentController {

	StudentService service = new StudentService();

	public void selectList() {
//		service.selectList() 의 처리결과를 받아 출력 
		List<StudentVO> list = service.selectList();
		System.out.println("** Student List **");

		if (list != null) {
			// list 출력
			for (StudentVO s : list) {
				System.out.println(s);
			} // for

		} else {
			System.out.println("** 출력할 자료가 없습니다 **");
		} // if else 

	} // selectList

	// 2.
	public void selectOne(StudentVO vo) {
		System.out.println("\n** Student Detail **");
		vo = service.selectOne(vo);
		if (vo != null) {
			System.out.println(vo);
		} else {
			System.out.println("** id에 해당하는 자료가 없습니다 **");
		}
	} // selectOne

	// 3. insert
	public void insert(StudentVO vo) {
		if (service.insert(vo) > 0) {
			// insert 성공
			System.out.println("** insert 성공 **");
		} else {
			// insert 실패
			System.out.println("** insert 실패 **");
		}
	} // insert 
	
	// 4. update
	public void update (StudentVO vo) {
		if (service.update(vo) > 0) {
			// update 성공
			System.out.println("** update 성공 **");
		} else {
			// update 실패
			System.out.println("** update 실패 **");
		}
	} // update 
	
	// 4. delete
	public void delete (StudentVO vo) {
		if (service.delete(vo) > 0) {
			// update 성공
			System.out.println("** delete 성공 **");
		} else {
			// update 실패
			System.out.println("** delete 실패 **");
		}
	} // delete 

	public static void main(String[] args) {
		// ** 기본 인스턴스 정의
		StudentController sc = new StudentController();
		StudentVO vo = new StudentVO();

		// 1. selectList
		sc.selectList();

		// 2. selectOne : Detail
		vo.setId("hsy");
		sc.selectOne(vo);
		
		// 3. insert 
		// -> 입력 Data set / 처음 한 번만 실행됨. 다시 실행하면 중복 데이터 들어가
		vo.setId("apple");
		vo.setName("사과나무");
		vo.setAge(99);
		vo.setJno(7);
		vo.setInfo("JDBC, insert Test");
		vo.setPoint(300.33);
		vo.setBirthday("2001-01-01");
		sc.insert(vo);
		
		
		// 4. update
		// -> "apple" 의 name, point, birthday 수정하기
		vo.setId("apple");
		vo.setName("김사과");
		vo.setPoint(116.66);
		vo.setBirthday("1996-01-27");
		sc.update(vo);

		// 5. delete
		// -> "apple" 삭제 
		vo.setId("apple");
		sc.delete(vo);

	} // main

} // class
