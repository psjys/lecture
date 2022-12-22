package jdbc02;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import jdbc01.DBConnection;

//** DAO(Data Access Object)
//=> SQL 구문 처리
//=> CRUD 구현 
//	 Create(insert), Read(select), Update, Detete

// sql 구문 처리 
public class StudentDAO {

	// ** 전역 변수 정의
	private static Connection cn = DBConnection.getConnection();
	private static Statement st;
	private static PreparedStatement pst;
	private static ResultSet rs; // result set 불러옴? 응?
	private static String sql;

	// 1. selectList
	// -> 처리 결과를 담아 전달 할 List 가 필요함 
	public List<StudentVO> selectList() {
		sql = "select * from student";
		// ** List 정의
		// -> 일괄적인 순차 처리에 가장 적합한 Collection인 ArrayList 사용 
		List<StudentVO> list = new ArrayList<StudentVO>();
//		StudentVO vo = new StudentVO(); // 여기에 넣으면 마지막 데이터만 반복해서 출력됨 
		
		try {
			st = cn.createStatement(); 
			rs = st.executeQuery(sql); // resultset 받아줌

			// 3) 결과 처리
			// -> select문의 결과가 있는지 확인
			if (rs.next()) { // = data가 하나라도 있다는 뜻 / select문의 결과가 있음 -> 출력
				// select문 결과 있음 -> List에 담아서 전달 (Service -> Controller)   
				
				System.out.println("** Student List **");
				System.out.println("id	|  name  | age |  jno  |  info 		|  point  |  birthday");
				do {
					StudentVO vo = new StudentVO();
					vo.setId(rs.getString(1));
					vo.setName(rs.getString("name"));
					vo.setAge(rs.getInt(3));
					vo.setJno(rs.getInt(4));
					vo.setInfo(rs.getString(5));
					vo.setPoint(rs.getDouble(6));
					vo.setBirthday(rs.getString(7));
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
	public StudentVO selectOne(StudentVO vo) {
		sql = "select * from student where id=?";
		
		try {
			pst=cn.prepareStatement(sql);
			pst.setString(1, vo.getId());
			rs = pst.executeQuery();
			
			if(rs.next()) {
				// select 성공 
				vo.setId(rs.getString(1));
				vo.setName(rs.getString("name"));
				vo.setAge(rs.getInt(3));
				vo.setJno(rs.getInt(4));
				vo.setInfo(rs.getString(5));
				vo.setPoint(rs.getDouble(6));
				vo.setBirthday(rs.getString(7));
				
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
	public int insert(StudentVO vo) {
		sql = "insert into student values(?, ?, ?, ?, ?, ?, ?)";
		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, vo.getId());
			pst.setString(2, vo.getName());
			pst.setInt(3, vo.getAge());
			pst.setInt(4, vo.getJno());
			pst.setString(5, vo.getInfo());
			pst.setDouble(6, vo.getPoint());
			pst.setString(7, vo.getBirthday());
			
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
	public int update (StudentVO vo) {
		sql = "update student set name=?,point=?,birthday=? where id=?";
		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, vo.getName());
			pst.setDouble(2, vo.getPoint());
			pst.setString(3, vo.getBirthday());
			pst.setString(4, vo.getId());
			
			return pst.executeUpdate();
		} catch (Exception e) {
			System.out.println("** update Exception -> " + e.toString());
			return 0;
		}
	} // update
	
	// 5. delete
	public int delete (StudentVO vo) {
		sql = "delete from student where id=?";
		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, vo.getId());
			return pst.executeUpdate();
			
		} catch (Exception e) {
			System.out.println("** delete Exception -> " + e.toString());
			return 0;
		}
	} // delete

} // class
