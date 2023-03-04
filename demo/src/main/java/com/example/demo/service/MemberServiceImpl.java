package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import mapperInterface.MemberMapper;
import vo.MemberVO;

//** interface 자동완성 
//=> Alt + Shift + T  
//=> 또는 마우스우클릭 PopUp Menu 의  Refactor - Extract Interface...

@Service
public class MemberServiceImpl implements MemberService {
	 
	@Autowired
	MemberMapper mapper;
	
	// 1. selectList
	@Override
	public List<MemberVO> selectList() {
		return mapper.selectList();
	} //selectList
	
	// 2. selectOne : Detail
	@Override
	public MemberVO selectOne(MemberVO vo) {
		return mapper.selectOne(vo);
	} //selectOne
	
	// 3. insert
	@Override
	public int insert(MemberVO vo) {
		return mapper.insert(vo);
	} //insert
	
	// 4. update
	@Override
	public int update(MemberVO vo) {
		return mapper.update(vo);
	} //update
	
	// 5. delete
	@Override
	public int delete(MemberVO vo) {
		return mapper.delete(vo);
	} //delete

} //class
