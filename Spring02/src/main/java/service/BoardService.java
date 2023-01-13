package service;

import java.util.List;

import model.BoardDAO;
import vo.BoardVO;

public class BoardService {
	
	BoardDAO dao = new BoardDAO();
	
	// 1. selectList
	public List<BoardVO> selectList() {
		return dao.selectList();
	}
	
	// 2. selectOne : Detail
	public BoardVO selectOne(BoardVO vo) {
		return dao.selectOne(vo);
	} 
	
	// 3. insert
	public int insert (BoardVO vo) {
		return dao.insert(vo);
	}
	
	// 4. update
	public int update (BoardVO vo) {
		return dao.update(vo);
	}
	
	// 5. delete 
	public int delete (BoardVO vo) {
		return dao.update(vo);
	}
}
