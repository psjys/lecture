package com.ncs.green;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import service.MemberService;
import vo.MemberVO;

@Controller
public class MemberController {

	@Autowired
	MemberService service;

	@RequestMapping(value = "/mlist")
	public ModelAndView mlist(ModelAndView mv) {

		mv.addObject("banana", service.selectList());
		mv.setViewName("/member/memberList");
		return mv;
	} // mlist

	@RequestMapping(value = "/mdetail")
	public ModelAndView mdetail(HttpServletRequest request, ModelAndView mv, MemberVO vo) {
		// => 매핑메서드의 매개변수로 VO를 정의하면
		// Parameter name 이 일치하는 컬럼의 값을 자동으로 VO에 할당(set) 해줌
		// 즉, vo.setId(request.getParameter("id")) 자동처리

		// 1) 요청분석
		// => 요청1) 관리자로그인의 경우 memberList 에서 : 요청 id가 Parameter 로 전달
		// => 요청2) login 후 내정보 : session 에서 loginID 를 get
		// => 요청3) Update 를 위한 요청 ( parameter jCode=U 추가됨 )

		String uri = "/member/memberDetail";
		// => 처리순서 : parameter 확인: 없으면 -> session 확인 -> Update요청여부 확인
		if (vo.getId() == null || vo.getId().length() < 1) {
			// => session 확인
			if (request.getSession().getAttribute("loginID") != null) {
				vo.setId((String) request.getSession().getAttribute("loginID"));
			} else {
				mv.addObject("message", "~~ session loginID 없음, 로그인 후 이용하세요 ~~");
				mv.setViewName("/member/loginForm");
				return mv;
			}

		}

		// 2) Service
		vo = service.selectOne(vo);
		mv.addObject("apple", vo);

		// 3) View
		if ("U".equals(request.getParameter("jCode"))) {
			uri = "member/updateForm";
		}

		mv.setViewName(uri);
		return mv;
	} // mdetail

	@RequestMapping(value = "/mlogin", method = RequestMethod.GET)
	public ModelAndView mloginf(ModelAndView mv) {
		mv.setViewName("/member/loginForm");
		return mv;
	} // mloginf

	@RequestMapping(value = "/mlogin", method = RequestMethod.POST)
	public ModelAndView mlogin(HttpServletRequest request, ModelAndView mv, MemberVO vo) {
		// 1) 요청분석
		// => 한글처리(web.xml 에서 Filter 설정, request 처리
		// => request 처리 ( 매핑메서드의 매개변수로 VO를 정의하면 자동처리 )
		// => 단, Service 로 id 만 확인후, Password 는 메서드에서 확인
		// 그러므로 입력받은 Password 는 보관
		String password = vo.getPassword();

		// 2) Service 실행
		// => 성공 -> 로그인정보 보관후, home
		// => 실패 -> loginForm 재로그인 유도
		String uri = "/member/loginForm";
		vo = service.selectOne(vo);
		if (vo != null) {
			// id 일치 -> password 확인
			if (vo.getPassword().equals(password)) {
				// 로그인 성공 -> session 에 로그인정보 보관
				request.getSession().setAttribute("loginID", vo.getId());
				request.getSession().setAttribute("loginName", vo.getName());
				uri = "redirect:home"; // * 주의 : 반드시 요청명사용
			} else {
				// password 오류
				mv.addObject("message", "~~ password 오류 !! 다시 하세요 ~~");
			}

		} else { // id 오류
			mv.addObject("message", "~~ ID 오류 !! 다시 하세요 ~~");
		}

		// 3) View 처리
		// => Spring 에서는 Forward가 Default
		// 그러므로 redirect 는 "redirect:home"
		mv.setViewName(uri);
		return mv;
	} // mlogin

	@RequestMapping(value = "/mlogout", method = RequestMethod.GET)
	public ModelAndView mlogout(HttpServletRequest request, ModelAndView mv, RedirectAttributes rttr) {
		// 1) 요청분석 & 해당하는 Service 실행
		// => Logout: session 무효화, home

		HttpSession session = request.getSession(false);
//      -> false : session이 없을때는 null return
		// (사용전에 반드시 null 확인해야함 -> NullPointerException 예방)
		if (session != null) {
			session.invalidate(); // session 무효화
			rttr.addFlashAttribute("message", "~~ Logout 성공 ~~");
		}

		mv.setViewName("redirect:home");
		return mv;
	} // mlogout

	// ** Member Join **
	@RequestMapping(value = "/mjoin", method = RequestMethod.GET)
	public ModelAndView mjoinf(ModelAndView mv) {
		mv.setViewName("/member/joinForm");
		return mv;
	} // mjoin

	@RequestMapping(value = "/mjoin", method = RequestMethod.POST)
	public ModelAndView mjoin(ModelAndView mv, MemberVO vo, 
			HttpServletRequest request) throws IOException {
		// 1) 요청분석
		// => 한글처리(web.xml 에서 Filter 설정, request 처리
		// => request 처리 ( 매핑메서드의 매개변수로 VO를 정의하면 자동처리 )

		// ** MultipartFile ***********************
		// => MultipartFile 타입의 uploadfilef 의 정보에서
		// upload된 image 화일과 화일명을 get 처리,
		// => upload된 image 화일은 서버의 정해진 폴더 (물리적위치)에 저장 하고, -> file1
		// => 이 위치에 대한 정보를 table에 저장 (vo의 UploadFile 에 set) -> file2
		// resources/uploadImage/bbb.gif -> Table 의 저장위치
		// ** image 화일명 중복시 : 나중 이미지로 update 됨.

		// ** Image 물리적위치 에 저장
		// 1) 현재 웹어플리케이션의 실행 위치 확인 :
		// => eslipse 개발환경 (배포전)
		// C:\MTest\myWork\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps\Spring02\

		// => 톰캣서버에 배포 후 : 서버내에서의 위치가 됨
		// D:\MTest\IDESet\apache-tomcat-9.0.41\webapps\Spring01\

		String realPath = request.getRealPath("/");
		System.out.println("** realpath => " + realPath);

		// 2) 위의 값을 이용해서 실제저장위치 확인
		// => 개발중인지, 배포했는지 에 따라 결정
		if (realPath.contains(".eclipse.")) // 개발 중 (배포 전 : eclipse 개발환경)
			realPath = "/Users/s116/Desktop/project1/Spring02/src/main/webapp/resources/uploadImage/";
		else
			realPath += "resources/uploadImage/";

		// ** 폴더 만들기 (File 클래스활용)
		// => 위의 저장경로에 폴더가 없는 경우 (uploadImage가 없는경우) 만들어 준다
		File f1 = new File(realPath);
		if (!f1.exists())
			f1.mkdir();
		// => realPath 디렉터리가 존재하는지 검사 (uploadImage 폴더 존재 확인)
		// 존재하지 않으면 디렉토리 생성

		// ** 기본 이미지 지정하기
		String file1, file2 = "resources/uploadImage/basicman4.png";
		// ** MultipartFile
		// => 업로드한 파일에 대한 모든 정보를 가지고 있으며 이의 처리를 위한 메서드를 제공한다.
		// -> String getOriginalFilename(),
		// -> void transferTo(File destFile),
		// -> boolean isEmpty()

		MultipartFile uploadfilef = vo.getUploadfilef(); // file 의 내용및 화일명 등 전송된 정보들
		if (uploadfilef != null && !uploadfilef.isEmpty()) {
			// ** Image를 선택함 -> Image저장 ( 경로_realPath + 화일명 )
			// 1) 물리적 저장경로(file1) 에 Image 저장
			file1 = realPath + uploadfilef.getOriginalFilename(); // 저장경로 완성 
			uploadfilef.transferTo(new File(file1));
			
			// 2) Table 저장 (file2) 준비
			file2 = "resources/uploadImage/" + uploadfilef.getOriginalFilename();
		}
		
		// ** 완성된 경로 vo 에 set & Service 처리 
		vo.setUploadfile(file2); 
		String uri = "/member/loginForm";
		
		// 2) Service 실행
		// => 성공 -> 로그인 유도, loginForm
		// => 실패 -> joinForm 재가입 유도
		if (service.insert(vo) > 0) {
			mv.addObject("message", "~~ 회원가입 성공, 로그인 후 이용하세요 ~~");
		} else {
			mv.addObject("message", "~~ 회원가입 실패, Data 오류! 다시 하세요 ~~");
			uri = "/member/joinForm";
		}

		// 3) View 처리
		mv.setViewName(uri);
		return mv;
	} // mjoin

	// ** Member Update **
	@RequestMapping(value = "/mupdate", method = RequestMethod.POST)
	public ModelAndView mupdate(HttpServletRequest request, 
			ModelAndView mv, MemberVO vo) throws Exception {
		// 1) 요청분석
		// => 한글처리(web.xml 에서 Filter 설정, request 처리
		// => request 처리 ( 매핑메서드의 매개변수로 VO를 정의하면 자동처리 )
		
		// ** Image 처리 
		
		String realPath = request.getRealPath("/");
		System.out.println("** realpath => " + realPath);

		// 2) 위의 값을 이용해서 실제저장위치 확인
		// => 개발중인지, 배포했는지 에 따라 결정
		if (realPath.contains(".eclipse.")) // 개발 중 (배포 전 : eclipse 개발환경)
			realPath = "/Users/s116/Desktop/project1/Spring02/src/main/webapp/resources/uploadImage/";
		else
			realPath += "resources/uploadImage/";

		// 3) 폴더 만들기 (File 클래스활용)
		// => 위의 저장경로에 폴더가 없는 경우 (uploadImage가 없는경우) 만들어 준다
		File f1 = new File(realPath);
		if (!f1.exists())
			f1.mkdir();

		// 4) 기본 이미지 지정하기
		String file1, file2 = "resources/uploadImage/basicman4.png";
		
		// 5) MultipartFile
		// => 업로드한 파일에 대한 모든 정보를 가지고 있으며 이의 처리를 위한 메서드를 제공한다.
		// -> String getOriginalFilename(),
		// -> void transferTo(File destFile),
		// -> boolean isEmpty()

		MultipartFile uploadfilef = vo.getUploadfilef(); // file 의 내용 및 파일명 등 전송된 정보들
		if (uploadfilef != null && !uploadfilef.isEmpty()) {
			// ** New File 선택한 경우 => 이때만 newFile 을 vo 에 set 
			// 5.1) 물리적 저장경로(file1) 에 Image 저장
			file1 = realPath + uploadfilef.getOriginalFilename(); // 저장경로 완성 
			uploadfilef.transferTo(new File(file1));
			
			// 5.2) Table 저장 (file2) 준비
			file2 = "resources/uploadImage/" + uploadfilef.getOriginalFilename();
			// 5.3) newFile 을 vo 에 set 
			vo.setUploadfile(file2);
		} // Image를 선택함 
		

		// 2) Service 실행
		// => 성공 -> 로그인 유도, memberDetail
		// => 실패 -> updateForm, 재수정 유도
		String uri = "member/memberDetail";

		mv.addObject("apple", vo);
		// => Update 성공 / 실패 모두 출력 시 필요하므로

		if (service.update(vo) > 0) {
			mv.addObject("message", "~~ 회원정보 수정 성공 ~~");
			// => 관리자가 member 정보를 변경하는 경우를 제외하고
			// 로그인 한 본인의 정보를 수정하는 경우 name을 변경하면 session 의 loginName 도 동일하게 변경
			// => loginID "admin" 이 아니고, loginName과 vo.getName()이 다른 경우

			if (!"admin".equals(request.getSession().getAttribute("loginID"))
					&& !vo.getName().equals(request.getSession().getAttribute("loginID"))) {
				request.getSession().setAttribute("loginName", vo.getName());
				// => name 을 수정한 경우에는 session 에 보관해놓은 이름도 변경 해야하므로
			}
		} else {
			uri = "member/updateForm";
			mv.addObject("message", "~~ 회원정보 수정 실패 다시 하세요 ~~");
		}

		// 3) View 처리
		mv.setViewName(uri);
		return mv;
	} // mupdate

	// ** Member delete **
	@RequestMapping(value = "/mdelete", method = RequestMethod.GET)
	public ModelAndView mdelete(HttpServletRequest request, ModelAndView mv, MemberVO vo, RedirectAttributes rttr) {
		// 1) 요청분석
		// 1.1) login 정보 : session 에서 loginID 를 get
		// 1.2) 관리자 기능 : loginID=='admin' and Parameter ID 가 존재하는 경우
		String loginID = "";

		if (request.getSession().getAttribute("loginID") != null) {
			loginID = (String) request.getSession().getAttribute("loginID");

		} else {
			mv.addObject("message", "~~ session loginID 없음. 로그인 후 이용하세요 ~~");
			mv.setViewName("/member/loginForm");
			return mv; // 메서드 종료
		}
		// => 관리자에 의한 강제 탈퇴 확인 :
		// Parameter로 전달된 id를 삭제해야함 (이미 vo에 담겨있음)
		if (!(loginID.equals("admin") && vo.getId() != null)) {
			// loginID를 삭제하는 경우
			vo.setId(loginID);
		} // else 면 vo에 담겨있는 id 를 삭제하면 됨

		// 2) Service 실행
		// => 성공
		// -> 본인 탈퇴 : 반드시 session 처리 해야함
		// -> 강제 탈퇴 : 관리자의 session 유지

		if (service.delete(vo) > 0) {
			// 탈퇴 성공
			if (!(loginID.equals("admin"))) {
				request.getSession().invalidate();
			}
			rttr.addFlashAttribute("message", "탈퇴 성공");
		} else {
			// 오류
			rttr.addFlashAttribute("message", "탈퇴 실패 다시 시도하세요");
		}

		// 3) View 처리
		mv.setViewName("redirect:home");
		return mv;
	} // mdelete

} // class