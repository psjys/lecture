package mapperInterface;

import java.util.List;

import vo.MemberVO;

public interface MemberMapper {

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
