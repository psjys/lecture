package mapperInterface;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import vo.MemberVO;

public interface MemberMapper {
	
	// ** JUnit test 
	// 1) 매개변수
	// => 기본규칙 : Mybatis 에서는 매개변수 Type은 무관하지만 개수는 1개만 허용
	// => @Param : mapper 에서 #{...} 적용 , 여러개를 사용 가능 
	MemberVO selectJoOne(@Param("id") String id, @Param("jno") Integer jno);
	
	// => Group 함수 Test
	// totalCount
	int totalCount ();
	
	// @Select 적용 연습
	@Select("select * from member where id=#{id}")
	MemberVO selectOneID(String id); // Type 무관. 개수는 1개 
	
	// => @select Test
	// 	  @으로 SQL 구문 처리 (~Mapper.xml 필요 없음)
	@Select("select * from member where id != 'admin'")
	List<MemberVO> selectList2();
	
	
	// **********************************
	// 1. selectList
	List<MemberVO> selectList(); 

	// 2. selectOne : Detail
	MemberVO selectOne(MemberVO vo); 

	// 3. insert
	int insert(MemberVO vo);

	// 4. update
	int update(MemberVO vo);

	// 5. delete
	int delete(MemberVO vo);
	
	
	
} // interface 
