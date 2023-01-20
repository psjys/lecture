package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.BoardDAO;
import vo.BoardVO;

//** interface 자동완성 
//=> Alt + Shift + T  
//=> 또는 마우스우클릭 PopUp Menu 의  Refactor - Extract Interface...

@Service
public class BoardServiceImpl implements BoardService {
   @Autowired
   BoardDAO dao; 
   
   // ** selectList
   @Override
   public List<BoardVO> selectList() {
      return dao.selectList();
   }
   // ** selectOne
   @Override
   public BoardVO selectOne(BoardVO vo) {
      return dao.selectOne(vo);
   }
   
} //class
