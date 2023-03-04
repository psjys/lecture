package com.example.demo.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.service.MemberService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import vo.MemberVO;

 
@Controller
@RequestMapping("/member")
@Log4j2
// => @Log4j 는 2015년 이후 지원중단 
@AllArgsConstructor
// => 모든 맴버변수 생성자주입하므로 각각 @Autowired 할 필요없음
public class MemberController {
	
	MemberService service;
	PasswordEncoder passwordEncoder;
	
	// ** ID 중복확인 **
	@GetMapping("/idDupCheck")
	public ModelAndView idDupCheck(ModelAndView mv, MemberVO vo) {
		// 1) newID 확인
		// => 존재하면 : 사용불가
		if ( service.selectOne(vo) != null ) {
			// 사용불가
			mv.addObject("idUse", "F");
		}else {
			// 사용가능
			mv.addObject("idUse", "T");
		}
		mv.setViewName("/member/idDupCheck");
		return mv;
	} //idDupCheck
	
	@GetMapping("/memberList")
	// => 클래스 매핑 /member + 메서드매핑 /memberList
	//    그러므로 /member/memberList.jsp 를 viewName 으로 실행
	public void mlist(Model model) {
		log.info("** MemberList Test **");
		model.addAttribute("banana", service.selectList());   
	} //mlist
	
	@GetMapping("/detail")
	public ModelAndView detail(HttpServletRequest request, ModelAndView mv, MemberVO vo) {

		String uri="/member/memberDetail";
		// => 처리순서 : parameter확인: 없으면 -> session 확인 -> Update요청여부 확인
		if ( vo.getId()==null || vo.getId().length()<1 ) {
			// => session 확인 
			if ( request.getSession().getAttribute("loginID")!=null ) {
				vo.setId((String)request.getSession().getAttribute("loginID"));
			}else {
				mv.addObject("message", "~~ session loginID 없음, 로그인 후 이용하세요 ~~");
				mv.setViewName("/member/loginForm");
				return mv;
			} // session확인
		} // vo확인
		
		// 2) Service
		vo=service.selectOne(vo);
		mv.addObject("apple", vo);
		
		// 3) View
		if ( "U".equals(request.getParameter("jCode")) ) {
			uri = "/member/updateForm";
		}
		mv.setViewName(uri);
		return mv;
	} //detail
	
	// ** Login & Logout **
	@GetMapping("/loginForm")
	// => 클래스 매핑 /member + 메서드매핑 /loginForm
	//    그러므로 /member/loginForm.jsp 를 viewName 으로 실행
	public void loginF() {
	} //loginF
	
	@PostMapping(value="/login")
	public ModelAndView login(HttpServletRequest request, ModelAndView mv, MemberVO vo) {
		// 1) 요청분석
		String password=vo.getPassword();
		
		// 2) Service 실행
		// => 성공 -> 로그인정보 보관후, home
		// => 실패 -> loginForm 재로그인 유도
		String uri="/member/loginForm" ;
		vo=service.selectOne(vo);
		if ( vo!=null ) {
			// ** id 일치 -> Password 확인 : 암호화 이전
			//if (vo.getPassword().equals(password)) {
			
			// -> Password 확인 : 암호화 이후
			if ( passwordEncoder.matches(password, vo.getPassword()) ) {
				// 로그인 성공 -> session 에 로그인정보 보관
				request.getSession().setAttribute("loginID", vo.getId());
				request.getSession().setAttribute("loginName", vo.getName());
				uri="redirect:/home"; // * 주의 : 반드시 요청명사용
			}else {
				// password 오류
				mv.addObject("message", "~~ password 오류 !! 다시 하세요 ~~");
			}
		}else { // id 오류
			mv.addObject("message", "~~ ID 오류 !! 다시 하세요 ~~");
		}
		// 3) View 처리
		mv.setViewName(uri);
		return mv;
	} //login
	
	@GetMapping("/logout")
	public ModelAndView logout(HttpServletRequest request, ModelAndView mv, RedirectAttributes rttr) {
		// 1) 요청분석 & 해당하는 Service 실행
		// => Logout: session 무효화, home
		
		HttpSession session = request.getSession(false);
		// => false : session이 없을때는 null return
		//			 사용전에 반드시 null 확인해야함 (NullPointerException 예방)
		if ( session !=null ) {
			session.invalidate(); // session 무효화
			rttr.addFlashAttribute("message", " ~~ Logout 성공 ~~ ");
		}
		mv.setViewName("redirect:/home");
		return mv;
	} //logout
	
	// ** Member Join **
	@GetMapping("/joinForm")
	public void joinF() {
	} //mjoin
	
	@PostMapping("/join")
	public ModelAndView join(HttpServletRequest request, 
					ModelAndView mv, MemberVO vo) throws IOException {
		
		// 1) 요청분석
		String realPath = request.getRealPath("/");
		System.out.println("** realPath => "+realPath);
		
		// 2) 위 의 값을 이용해서 실제저장위치 확인 
		// => 개발중인지, 배포했는지 에 따라 결정
		if ( realPath.contains(".eclipse.") )  // 개발중 (배포전: eclipse 개발환경)
			 realPath = "D:\\MTest\\MyWork\\Spring02\\src\\main\\webapp\\resources\\uploadImage\\" ;
		else realPath += "resources\\uploadImage\\";
		
		// ** 폴더 만들기 (File 클래스활용)
		// => 위의 저장경로에 폴더가 없는 경우 (uploadImage가 없는경우)  만들어 준다
		File f1 = new File(realPath);
		if ( !f1.exists() )  f1.mkdir();
		// => realPath 디렉터리가 존재하는지 검사 (uploadImage 폴더 존재 확인)
		//    존재하지 않으면 디렉토리 생성
		
		// ** 기본 이미지 지정하기 
		String  file1, file2="resources/uploadImage/basicman4.png" ;
		
		// ** MultipartFile
		MultipartFile uploadfilef = vo.getUploadfilef(); // file 의 내용및 화일명 등 전송된 정보들
		if ( uploadfilef!=null && !uploadfilef.isEmpty() ) {
			// ** Image를 선택함 -> Image저장 ( 경로_realPath + 화일명 )
			// 1) 물리적 저장경로(file1) 에 Image 저장
			file1= realPath + uploadfilef.getOriginalFilename(); // 저장경로 완성
			uploadfilef.transferTo(new File(file1));
			
			// 2) Table 저장 (file2) 준비
			file2="resources/uploadImage/" + uploadfilef.getOriginalFilename();
		} //Image를 선택함
		
		// ** 완성된 경로 vo 에 set & Service 처리
		vo.setUploadfile(file2);
		String uri = "/member/loginForm";
		
		// *** PasswordEncoder (암호화 적용하기)
		// => BCryptPasswordEncoder 적용
		//    encode(rawData) -> digest 생성 & vo에 set  
		vo.setPassword(passwordEncoder.encode(vo.getPassword()));
		
		// 2) Service 실행
		// => 성공 -> 로그인 유도, loginForm
		// => 실패 -> joinForm 재가입 유도
		if ( service.insert(vo)>0 ) {    
			mv.addObject("message", "~~ 회원가입 성공, 로그인 후 이용하세요 ~~");
		}else {
			mv.addObject("message", "~~ 회원가입 실패, Data 오류! 다시 하세요 ~~");
			uri="/member/joinForm" ;
		}
		
		// 3) View 처리
		mv.setViewName(uri);
		return mv;
	} //join

	// ** Member Update **
	@PostMapping("/update")
	public ModelAndView update(HttpServletRequest request, 
			ModelAndView mv, MemberVO vo) throws IOException {
		// ** 요청분석 & Image 처리
		// 1) 경로 확인
		String realPath = request.getRealPath("/");
		System.out.println("** realPath => "+realPath);
		
		// 2) 위 의 값을 이용해서 실제저장위치 확인 
		// => 개발중인지, 배포했는지 에 따라 결정
		if ( realPath.contains(".eclipse.") )  // 개발중 (배포전: eclipse 개발환경)
			 realPath = "D:\\MTest\\MyWork\\Spring02\\src\\main\\webapp\\resources\\uploadImage\\" ;
		else realPath += "resources\\uploadImage\\";
		
		// 3) 폴더 만들기 (File 클래스활용)
		// => 위의 저장경로에 폴더가 없는 경우 (uploadImage가 없는경우)  만들어 준다
		File f1 = new File(realPath);
		if ( !f1.exists() )  f1.mkdir();
		
		// 4) 기본 이미지 지정하기 
		String  file1, file2="resources/uploadImage/basicman4.png" ;
		
		// 5) MultipartFile
		MultipartFile uploadfilef = vo.getUploadfilef(); // file 의 내용및 화일명 등 전송된 정보들
		if ( uploadfilef!=null && !uploadfilef.isEmpty() ) {
			// ** New File 선택한 경우 => 이때만 newFile 을 vo 에 set
			// 5.1) 물리적 저장경로(file1) 에 Image 저장
			file1= realPath + uploadfilef.getOriginalFilename(); // 저장경로 완성
			uploadfilef.transferTo(new File(file1));
			
			// 5.2) Table 저장 (file2) 준비
			file2="resources/uploadImage/" + uploadfilef.getOriginalFilename();
			
			// 5.3) newFile 을 vo 에 set
			vo.setUploadfile(file2);
		} //Image를 선택함
		
		// 2) Service 실행
		// => 성공 -> 내정보 표시, memberDetail
		// => 실패 -> 친절하게 안내하고 재수정 유도, updateForm
		String uri="/member/memberDetail" ;
		mv.addObject("apple", vo);
		// => Update 성공/실패 모두 출력시 필요하므로
		if ( service.update(vo)>0 ) {
			mv.addObject("message", "~~ 회원정보 수정 성공 ~~"); 
			
			// ** name을 수정한 경우에는 session에 보관해놓은 이름도 변경해야하는 경우
			// => 관리자가 member 정보를 변경하는 경우를 제외하고,
			//    로그인한 본인의 장보를 수정하는 경우 name을 변경하면 session 의 loginName 도 동일하게 변경 
			// => loginID "admin" 이 아니고, loginName 과 vo.getName() 가 다른경우
			if ( !"admin".equals(request.getSession().getAttribute("loginID")) && 
				 !vo.getName().equals(request.getSession().getAttribute("loginName")) ) {
				request.getSession().setAttribute("loginName", vo.getName());
			}
		}else {
			uri="/member/updateForm" ;
			mv.addObject("message", "~~ 회원정보 수정 실패, 다시 하세요 ~~");
		}
		// 3) View 처리
		mv.setViewName(uri);
		return mv;
	} //update
	
	// ** Member Delete **
	@GetMapping("/delete")
	public ModelAndView delete(HttpServletRequest request, ModelAndView mv, MemberVO vo, RedirectAttributes rttr) {
		// 1) 요청분석
		// 1.1) login 정보: session 에서 loginID 를 get
		// 1.2) 관리자 기능: loginID=='admin' and Parameter id 가 존재하는경우 
		String loginID="";
		if ( request.getSession().getAttribute("loginID")!=null ) {
			loginID=(String)request.getSession().getAttribute("loginID");
		}else {
			mv.addObject("message", "~~ session loginID 없음, 로그인 후 이용하세요 ~~");
			mv.setViewName("/member/loginForm");
			return mv; // 메서드 종료 
		}
		// => 관리자에 의한 강제탈퇴 확인
		//	  Parameter 로 전달된 id 를 삭제해야함  (이미 vo 에 담겨있음) 	
		if  (!(loginID.equals("admin") && request.getParameter("id")!=null)) {
			// loginID 를 삭제
			vo.setId(loginID);
		} // else 면 vo에 담겨있는 id를 삭제하면 됨. 
		
		// 2) Service 실행
		// => 성공  
		//	-> 본인탈퇴: 반드시 session 처리 해야함
		//	-> 강제탈퇴: 관리자의 session 유지
		if ( service.delete(vo)>0 ) {
			if ( !loginID.equals("admin") ) {
				request.getSession().invalidate(); 
			}
			rttr.addFlashAttribute("message", "~~ 회원 탈퇴 성공, 1개월 후 재가입 가능합니다. ~~");
		}else {
			rttr.addFlashAttribute("message", "~~ 회원 탈퇴 실패 , 다시하세요 ~~");
		}
		// 3) View 처리
		mv.setViewName("redirect:/home");
		return mv;
	} //delete
	
} //class
