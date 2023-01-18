package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import vo.GroupDTO;
import vo.MemberVO;
import vo.StudentVO;

//** DAO(Data Access Object)
//=> SQL 구문 처리
//=> CRUD 구현 
//	 Create(insert), Read(select), Update, Delete

@Repository
public class MemberDAO {
	// ** 전역 변수 정의
	private static Connection cn = DBConnection.getConnection();
	private static Statement st;
	private static PreparedStatement pst;
	private static ResultSet rs; // result set 불러옴? 응?
	private static String sql;

	// 1. selectList
	// -> 처리 결과를 담아 전달 할 List 가 필요함
	public List<MemberVO> selectList() {
		sql = "select * from member";
		// ** List 정의
		// -> 일괄적인 순차 처리에 가장 적합한 Collection인 ArrayList 사용
		List<MemberVO> list = new ArrayList<MemberVO>();
//			StudentVO vo = new StudentVO(); // 여기에 넣으면 마지막 데이터만 반복해서 출력됨 

		try {
			st = cn.createStatement();
			rs = st.executeQuery(sql); // resultset 받아줌

			// 3) 결과 처리
			// -> select문의 결과가 있는지 확인
			if (rs.next()) { // = data가 하나라도 있다는 뜻 / select문의 결과가 있음 -> 출력
				// select문 결과 있음 -> List에 담아서 전달 (Service -> Controller)
				do {
					MemberVO vo = new MemberVO();
					vo.setId(rs.getString(1));
					vo.setPassword(rs.getString(2));
					vo.setName(rs.getString("name"));
					vo.setAge(rs.getInt(4));
					vo.setJno(rs.getInt(5));
					vo.setInfo(rs.getString(6));
					vo.setPoint(rs.getDouble(7));
					vo.setBirthday(rs.getString(8));
					vo.setRid(rs.getString(9));
					vo.setUploadfile(rs.getString(10));
					
					list.add(vo);

				} while (rs.next()); // rs.next가 있는 동안 반복

			} else {
				// select 문 결과 없음
				System.out.println("** selectList : 출력자료가 한 건도 없음 **");
				list = null;
			}

		} catch (Exception e) {
			System.out.println("** selectList Exception -> " + e.toString());
			list = null;
		}
		return list;

	} // selectList

	// 2. selectOne : Detail
	// -> id를 이용해서 selectOne 한 결과를 return
	public MemberVO selectOne(MemberVO vo) {
		sql = "select * from member where id=?";

		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, vo.getId());
			rs = pst.executeQuery();

			if (rs.next()) {
				// select 성공
				vo.setId(rs.getString(1));
				vo.setPassword(rs.getString(2));
				vo.setName(rs.getString("name"));
				vo.setAge(rs.getInt(4));
				vo.setJno(rs.getInt(5));
				vo.setInfo(rs.getString(6));
				vo.setPoint(rs.getDouble(7));
				vo.setBirthday(rs.getString(8));

			} else {
				// select 실패
				vo = null;
			}

		} catch (Exception e) {
			System.out.println("** selectOne Exception -> " + e.toString());
			vo = null;
		}

		return vo;
	} // selectOne

	// 3. insert
	public int insert(MemberVO vo) {
		sql = "insert into member values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, vo.getId());
			pst.setString(2, vo.getPassword());
			pst.setString(3, vo.getName());
			pst.setInt(4, vo.getAge());
			pst.setInt(5, vo.getJno());
			pst.setString(6, vo.getInfo());
			pst.setDouble(7, vo.getPoint());
			pst.setString(8, vo.getBirthday());
			pst.setString(9, vo.getRid());
			pst.setString(10, vo.getUploadfile());

			return pst.executeUpdate();

			// 이 return 문 줄인 것
			// int cnt = pst.executeUpdate();
			// return cnt;

		} catch (Exception e) {
			System.out.println("** insert Exception -> " + e.toString());
			return 0;
		}

	} // insert

	// 4. update
	public int update(MemberVO vo) {
		sql = "update member set password=?, name=?, age=?, jno=?, info=?, point=?,birthday=?, rid=?, uploadfile=? where id=?";
		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, vo.getPassword());
			pst.setString(2, vo.getName());
			pst.setInt(3, vo.getAge());
			pst.setInt(4, vo.getJno());
			pst.setString(5, vo.getInfo());
			pst.setDouble(6, vo.getPoint());
			pst.setString(7, vo.getBirthday());
			pst.setString(8, vo.getRid());
			pst.setString(9, vo.getUploadfile());
			pst.setString(10, vo.getId());

			return pst.executeUpdate();
		} catch (Exception e) {
			System.out.println("** update Exception -> " + e.toString());
			return 0;
		}
	} // update

	// 5. delete
	public int delete(MemberVO vo) {
		sql = "delete from member where id=?";
		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, vo.getId());
			return pst.executeUpdate();

		} catch (Exception e) {
			System.out.println("** delete Exception -> " + e.toString());
			return 0;
		}
	} // delete
	
	// 6. group 통계

	public List<GroupDTO> groupTest() {
		sql = "select j.jno, j.jname, count(*), sum(age), avg(age), min(age), max(age)"
				+ "from jo j, student s where j.jno=s.jno group by jno";

		// -> Outer Join
		sql = "select s.jno, j.jname, count(*), sum(age), avg(age), min(age), max(age)"
				+ "from student s left outer join jo j on s.jno=j.jno group by jno";

		// -> Equ_Join
//		sql="select s.jno, j.jname, count(*), sum(age), avg(age), min(age), max(age)"
//				+ "from jo j, student s where j.jno=s.jno group by jno";

		List<GroupDTO> list = new ArrayList<GroupDTO>();
		try {
			pst = cn.prepareStatement(sql);
			rs = pst.executeQuery();
			if (rs.next()) {
				do {
					GroupDTO dto = new GroupDTO();
					dto.setJno(rs.getInt(1));
					dto.setJname(rs.getString(2));
					dto.setCount(rs.getInt(3));
					dto.setSum(rs.getInt(4));
					dto.setAvg(rs.getDouble(5));
					dto.setMin(rs.getInt(6));
					dto.setMax(rs.getInt(7));
					list.add(dto);

				} while (rs.next());

			} else {
				System.out.println("** groupTest : 출력 자료가 1건도 없음 **");
				list = null;
			}

		} catch (Exception e) {
			System.out.println("** groupTest Exception -> " + e.toString());
			list = null;
		}

		return list;
	} // groupTest

	// 7. Transaction Test

	// ** JDBC Transaction
	// Connection 객체가 관리
	// 기본값은 AutoCommit true 임.
	// setAutoCommit(false) -> commit 또는 rollback

	// 1) Test1
	// * Transaction 적용하지 않고 오류 유발
	// 동일 자료 2회 입력 : 첫번째는 입력되고 , 두번째 입력에서 Exception 발생
	// -> Data 의 무결성에 영향을 주게 됨

	// 2) Test2
	// * Transaction 적용하고 오류 유발
	// 동일 자료 2회 입력 : 첫번째 입력후, 두번째 입력에서 Exception 발생하지만 모두 rollback 됨.
	// -> 즉, 모두 입력되지 않음

	public void transactionTest() {
		sql = "insert into student values('xxx2','엑스맨2',77,9,'Transaction Test', 777.77,'1907-07-07')";
		// 1) Test1
		// -> Transaction 적용하지 않고 동일자료 2회 입력

//		 try {
//			 pst=cn.prepareStatement(sql);
//			 pst.executeUpdate();	// ok
//			 pst.executeUpdate();	// 키 중복 오류 -> catch 블럭으로 
//			 
//		 } catch (Exception e) {
//			 System.out.println("** transactionTest Exception -> " + e.toString());
//		 }

		// 2) Test2
		// -> Transaction 적용하지 않고 동일자료 2회 입력 -> 모두 rollback
		// transaction 하려면 auto commit false로 변경
		try {
			cn.setAutoCommit(false);
			pst = cn.prepareStatement(sql);
			pst.executeUpdate(); // ok
			pst.executeUpdate(); // 키 중복 오류 Exception -> catch 블럭으로 rollback

			// ** 모든 구문 정상 실행 -> commit
			cn.commit();

		} catch (Exception e) {
			System.out.println("** transactionTest Exception -> " + e.toString());
			// -> Exception 발생 : rollback

			try {
				cn.rollback(); // rollback 쓰려면 try catch문 하나 더 써줘야함
				System.out.println("** transactionTest2 Rollback 성공 **");
			} catch (Exception e2) {
				System.out.println("** Rollback 실패 Exception -> " + e.toString());
			} // rollback_try
		} // transaction_try
	} // transactionTest
}
