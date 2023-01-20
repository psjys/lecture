package service;

import java.util.List;

import vo.BoardVO;

public interface BoardService {

	// 1. selectList
	List<BoardVO> selectList();

	// 2. selectOne : Detail
	BoardVO selectOne(BoardVO vo);


}