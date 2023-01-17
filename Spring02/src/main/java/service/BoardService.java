package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.BoardDAO;
import vo.BoardVO;

@Service
public class BoardService {
	@Autowired
	//=> 아래 생성문 "=" 의 역할 (반드시 생성해야함) 
	BoardDAO dao;
	// BoardDAO dao = new BoardDAO();
	
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
		return dao.delete(vo);
	}
	// 조회수 증가 
	public int countUp(BoardVO vo) {
		return dao.countUp(vo);
	}
	// 댓글 등록 
	public int rinsert (BoardVO vo) {
		return dao.rinsert(vo);
	}
}
