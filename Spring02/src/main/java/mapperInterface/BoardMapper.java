package mapperInterface;

import java.util.List;

import vo.BoardVO;

public interface BoardMapper {
	// 1. selectList
	List<BoardVO> selectList();

	// 2. selectOne : Detail
	BoardVO selectOne(BoardVO vo);

	// 3. insert
	int insert(BoardVO vo);

	// 4. update
	int update(BoardVO vo);

	// 5. delete 
	int delete(BoardVO vo);

	// 조회수 증가 
	int countUp(BoardVO vo);

	// 댓글 등록 
	int rinsert(BoardVO vo);
	int stepUpdate(BoardVO vo);
	
} // interface 
