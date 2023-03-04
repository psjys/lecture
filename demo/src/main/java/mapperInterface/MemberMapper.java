package mapperInterface;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import vo.MemberVO;

// ** Mybatis 설정
//1) Mapper interface 
//=> 설정
// -> @ 또는 Java Code 를 이용 
// -> @MapperScan 이용
//		- @MapperScan(value={"mapperInterface“, …..})  
//		- DemoApplication 에 설정
//		- Mapper 인터페이스들이 들어있는 패키지들을 인식시켜줌. 
//		
//=> Mybatis @(에너테이션) 으로 SQL문 처리 가능

//2) xml Mapper 사용
//=> 위 1)의 @ 방법보다 xml 사용이 편한 경우가 있는데  
//   특히 유지보수가 중요한 경우에는 xml을 권장함.
//=> xml 매퍼 설정은 application.properties 를 이용함. 
//	- mybatis.mapper-location=classpath:/mappers/*Mapper.xml
//=> selectOne 으로 Test
 
public interface MemberMapper {

	// 1. selectList
	@Select("select * from member where id != 'admin'")
	List<MemberVO> selectList();  

	// 2. selectOne : Detail
	//@Select("select * from member where id=#{id}")
	// => xml Mapper 적용
	MemberVO selectOne(MemberVO vo);  

	// 3. insert
	@Insert("insert into member values( #{id},#{password},#{name},#{age},"    
			+"#{jno},#{info},#{point},#{birthday},#{rid},#{uploadfile} )")
	int insert(MemberVO vo);  
	
	// 4. update
	// => password 암호화 이후, password 변경은 별도로 처리해야 됩니다~
	//	  password=#{password}  제외
	@Update("update member set name=#{name}, age=#{age}, jno=#{jno},"
			+" info=#{info}, point=#{point}, birthday=#{birthday},"
			+" rid=#{rid}, uploadfile=#{uploadfile} where id=#{id}")
	int update(MemberVO vo);  

	// 5. delete
	@Delete("delete from member where id=#{id}")
	int delete(MemberVO vo);

} //interface
