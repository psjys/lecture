package jdbc02;

import java.util.List;

// ** Controller
// -> 요청 받아서 해당 서비스를 처리 한 후 결과 출력 
// -> 유저와의 만남에 접점이 있음 / 전방에 위치  

public class StudentController {

	StudentService service = new StudentService();
	
	// 1. 
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
	
	// 5. delete
	public void delete (StudentVO vo) {
		if (service.delete(vo) > 0) {
			// update 성공
			System.out.println("** delete 성공 **");
		} else {
			// update 실패
			System.out.println("** delete 실패 **");
		}
	} // delete 
	
	// 6. groupTest 
	public void groupTest (StudentVO vo) {
		List<GroupDTO> list = service.groupTest();
		if(list != null) {
			// 결과 출력 
			for (GroupDTO j:list) { // groupDTO의 list를 꺼낸다 
				System.out.println(j);
			}
		} else {
			// 출력할 결과 없음 
			System.out.println("** 출력할 조별 통계 결과 없음 **");
		}
	} // groupTest 
	
	// 7. Transaction Test
	public void transactionTest() {
		service.transactionTest();
	} // transactionTest

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
		// -> 입력 Data set / 처음 한 번만 실행됨. 다시 실행하면 중복 데이터 들어가서
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
		
		// 6. group 통계
		// -> GroupDTO 작성, Service, DAO 작성 
		sc.groupTest(vo); // ???
		
		// 7. Transaction Test
		sc.transactionTest();
		System.out.println("** program 정상 종료 **");

	} // main

} // class
