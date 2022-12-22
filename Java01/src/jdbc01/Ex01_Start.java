package jdbc01;

import java.sql.*;

//import com.sun.crypto.provider.RSACipher;

import jdbc02.StudentVO;

public class Ex01_Start {
	// ** 전역 변수 정의
	private static Connection cn = DBConnection.getConnection();
	private static Statement st;
	private static PreparedStatement pst;
	private static ResultSet rs; // result set 불러옴? 응?
	private static String sql;
	
	String name = "ghdrlfehd";
	
	// ** Student List
	public static void selectList() {
		// 1) DBConnection
		// -> 전역 변수로 전달 받음

		// 2) SQL 구문처리
		sql = "select * from student";
		try {
			st = cn.createStatement();
			rs = st.executeQuery(sql); // resultset 받아줌

			// 3) 결과 처리
			// -> select문의 결과가 있는지 확인
			if (rs.next()) { // = data가 하나라도 있다는 뜻 / select문의 결과가 있음 -> 출력

				System.out.println("** Student List **");
				System.out.println("id	|  name  | age |  jno  |  info 		|  point  |  birthday");
				do {
					System.out.print(rs.getString(1) + " "); // get컬럼타입(인덱스 또는 컬럼명) - 컬럼은 인덱스 1부터 시
					System.out.print(rs.getString("name") + " ");
					System.out.print(rs.getInt(3) + " ");
					System.out.print(rs.getInt(4) + " ");
					System.out.print(rs.getString(5) + " ");
					System.out.print(rs.getDouble(6) + " ");
					System.out.print(rs.getString(7) + "\n");

				} while (rs.next()); // rs.next가 있는 동안 반복

			} else {
				// select 문 결과 없음
				System.out.println("** selectList : 출력자료가 한 건도 없음 **");
			}

		} catch (Exception e) {
			System.out.println("** selectList Exception -> " + e.toString());
		}

	} // selectList

	// ** 조건 검색 하기 : 조별 출력
	public static void joListSt(int jno) {
		// 1) DBConnection
		// 2) SQL구문처리
		sql = "select * from student where jno=" + jno;
		try {
			st = cn.createStatement();
			rs = st.executeQuery(sql); // 실행 시
			// 3) 결과처리
			// => select 문의 결과가 있는지 확인
			if (rs.next()) {
				// select문 결과 있음
				// => 출력
				System.out.println("** Student Jo_List **");
				System.out.println(" jno | id  | name | age  |  info      | point | birthday");
				do {
					System.out.print(rs.getInt(4) + " ");
					System.out.print(rs.getString(1) + " "); // get컬럼타입(인덱스 또는 컬럼명)
					System.out.print(rs.getString("name") + " ");
					System.out.print(rs.getInt(3) + " ");
					System.out.print(rs.getString(5) + " ");
					System.out.print(rs.getDouble(6) + " ");
					System.out.print(rs.getString(7) + "\n");
				} while (rs.next());
			} else {
				// select문 결과 없음
				System.out.println("** joListSt : 출력자료가 1건도 없음 **");
			}
		} catch (Exception e) {
			System.out.println("** joListSt Exception => " + e.toString());
		}
	} // joListSt

	// 2. PreparedStatement
	// -> ? (바인딩 변수) 이용.
	public static void joListPst(int jno, String id) {
		sql = "select * from student where jno=? and id>?"; // ? : 바인딩변수. 결정되지 않았을 때 변수를 대신하는것
		try {
			pst = cn.prepareStatement(sql); // 미리 준비 한다는 뜻
			// 두 개의 물음표를 알맞게 처리해줌
			pst.setInt(1, jno);
			pst.setString(2, id);
			rs = pst.executeQuery(); // 매개변수가 없음

			if (rs.next()) {
				System.out.println("** Student Jo_List **");
				System.out.println(" jno | id  | name | age  |  info      | point | birthday");

				do {
					System.out.print(rs.getInt(4) + " ");
					System.out.print(rs.getString(1) + " "); // get컬럼타입(인덱스 또는 컬럼명)
					System.out.print(rs.getString("name") + " ");
					System.out.print(rs.getInt(3) + " ");
					System.out.print(rs.getString(5) + " ");
					System.out.print(rs.getDouble(6) + " ");
					System.out.print(rs.getString(7) + "\n");
				} while (rs.next());

			} else {
				System.out.println("** joListPst : 출력자료가 1건도 없음 **");
			}

		} catch (Exception e) {
			System.out.println("** joListPst Exception -> " + e.toString());
		}
	} // joListPst

	// ** insert 메서드 만들기 (매개변수 활용)
	// st or pst -> pst가 훨씬 효율적
	// 실행메서드 : executeUpdate() > 0 : 처리한 데이터의 갯수를 리턴  
	// 			 C insert, U update, D delete 의 경우 사용 

	// => insert 구문
	// insert into student(id, name, age, info, jno) values('banana', '김길동', 22,
	// 'Test Data', 6);
	// => Statement 객체 이용
	// "insert into student(id, name, age, info, jno) values('"+id+"','"+name+"',
	// "+age+", '"+info+"', "+jno+")";

	// => 위의 문자열 더하기의 불편함을 개선 한것이 PreparedStatement 이다.
	// PreparedStatement 에서는 바인딩변수 ? 를 이용함
	// insert into student(id, name, age, info, jno) values(?, ?, ?, ?, ?);
//	public void insert(String id, String name, int age, int jno, String info, Double point, String birthday) {
	public void insert (StudentVO vo) {
		sql = "insert into student(id, name, age, jno, info, point, birthday) values(?, ?, ?, ?, ?, ?, ?)";
		// 모든 컬럼의 값을 순서대로 입력할 때는 생략해도됨
		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, vo.getId()); 	// id -> vo.getId()
			pst.setString(2, vo.getName()); // name -> vo.getName()
			pst.setInt(3, vo.getAge());		// age -> vo.getAge()
			pst.setInt(4, vo.getJno());
			pst.setString(5, vo.getInfo());
			pst.setDouble(6, vo.getPoint());
			pst.setString(7, vo.getBirthday());
			// 입력, 수정, 삭제는 executeUpdate 메서드 사용 
			if (pst.executeUpdate() > 0) //처리한 데이터의 갯수를 리턴  
				System.out.println("** Insert 성공");
			else System.out.println("** Insert 실패"); // 실패면 exception으로 감 

		} catch (Exception e) {
			System.out.println("** insert Exception -> " + e.toString());
		}
	} // insert 
	
	public static void cnClose() {
		// 항상 역순으로 써야함 (역순으로 쓰지 않아도 오류는 아님) 
		try {
			if(rs!=null) rs.close();
			if(st!=null) st.close();
			if(pst!=null) pst.close();
			if(cn!=null) cn.close();
			
		} catch (Exception e) {
			System.out.println("** cnClose Exception -> " + e.toString());
		} 
	} // cnClose
	
	public static void main(String[] args) {

		// ** JDBC
		// -> Java로 CRUD 구현
		// Student List 출력
		// 순서 : DBconnection -> SQL 구문 처리 -> 결과처리
		
		// SQL 구문 처리
//		selectList();
		joListSt(3);
		joListPst(3, "c"); // c이상 사람은 나오면 안됨
		
		cnClose();

	} // main

} // class