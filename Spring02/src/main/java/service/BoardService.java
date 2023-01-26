package service;

import java.util.List;

import criTest.Criteria;
import vo.BoardVO;

public interface BoardService {
	
	// ** Criteria PageList
	List<BoardVO> criList(Criteria cri);
	int criTotalCount();
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

}