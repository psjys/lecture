<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>** MemberUpdate SpringBoot_Mybatis **</title>
	<link rel="stylesheet" type="text/css" href="/resources/myLib/myStyle.css">
	<script src="/resources/myLib/jquery-3.2.1.min.js"></script>
</head>
<body>
<h2>** MemberUpdate SpringBoot_Mybatis **</h2>
<form action="update" method="post" enctype="multipart/form-data">
<table>
	<tr height="40"><td bgcolor="GreenYellow">I D</td>
		<td><input type="text" name="id" size="20" value="${apple.id}" readonly ></td>
		<!-- ID 는 수정 불가 => input Tag 의 입력막기 
								-> readonly : 권장 (서버로 전송됨)
								-> disabled : 비추 (서버로 전송안됨)
		-->
	</tr>
	<tr height="40"><td bgcolor="GreenYellow">Password</td>
		<td><span>password 변경은 별도로 처리해야 됩니다~~</span>
			<%-- password 암호화 이후 
				 => type="hidden" 으로 변경  --%>
			<input type="hidden" name="password" size="20" value="${apple.password}"> 
		</td>
	</tr>
	<tr height="40"><td bgcolor="GreenYellow">Name</td>
		<td><input type="text" name="name" size="20" value="${apple.name}"></td>
	</tr>
	<tr height="40"><td bgcolor="GreenYellow">Age</td>
		<td><input type="text" name="age" size="20" value="${apple.age}"></td>
	</tr>
	<tr height="40"><td bgcolor="GreenYellow">Jno</td>
		<td><select name="jno">
			<option value="1" ${apple.jno==1 ? "selected": ""} >1조: 굉장해엄청나</option>
			<option value="2" ${apple.jno==2 ? "selected": ""} >2조: 구해조</option>
			<option value="3" ${apple.jno==3 ? "selected": ""} >3조: 백업은 기본이조</option>
			<option value="4" ${apple.jno==4 ? "selected": ""} >4조: 상호형 빵사조</option>
			<option value="5" ${apple.jno==5 ? "selected": ""} >5조: (주)식빵</option>
			<option value="7" ${apple.jno==7 ? "selected": ""} >7조: 칠면조</option>
		</select></td>
	</tr>
	<tr height="40"><td bgcolor="GreenYellow">Info</td>
		<td><input type="text" name="info" value="${apple.info}"></td>
	</tr>
	<tr height="40"><td bgcolor="GreenYellow">Point</td>
		<td><input type="text" name="point" size="20" value="${apple.point}"></td>
	</tr>
	<tr height="40"><td bgcolor="GreenYellow">Birthday</td>
		<td><input type="date" name="birthday" value="${apple.birthday}"></td>
	</tr>
	<tr height="40"><td bgcolor="GreenYellow">추천인</td>
		<td><input type="text" name="rid" value="${apple.rid}"></td>
	</tr>
	<!-- Image Update 추가 
			=> form Tag : method, enctype 확인
			=> new Image 를 선택하는 경우 -> uploadfilef 사용
			=> new Image 를 선택하지않는 경우 
				-> 본래 Image 를 사용 -> uploadfile 값이 필요함
	-->
	<tr height="40"><td bgcolor="GreenYellow">Image</td>
		<td><img src="/${apple.uploadfile}" class="select_img" width="80" height="100">
			<input type="hidden" name="uploadfile" value="${apple.uploadfile}"><br>
			<input type="file" name="uploadfilef" id="uploadfilef" size="20"></td>
		<script>
		$('#uploadfilef').change(function(){
			if(this.files && this.files[0]) {
				var reader = new FileReader;
				reader.readAsDataURL(this.files[0]);
	 			reader.onload = function(e) {
 					$(".select_img").attr("src", e.target.result)
 									.width(80).height(100); 
 				} // onload_function
	 		} // if	
		}); //change
		</script>
	</tr>
	<tr height="40"><td></td>
		<td><input type="submit" value="수정">&nbsp;&nbsp;&nbsp;
			<input type="reset" value="취소">
		</td>
	</tr>
</table>
</form>
<c:if test="${not empty requestScope.message}">
	<hr>
	=> ${requestScope.message}<br>
</c:if>
<hr>
&nbsp;<a href="javascript:history.go(-1)">이전으로</a>&nbsp;
&nbsp;<a href="/home">[Home]</a>&nbsp;
</body>
</html>