<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Board CheckList Spring_Mybatis **</title>
<link rel="stylesheet" type="text/css"
	href="resources/mylib/myStyle.css">
<script src="resources/myLib/jquery-3.2.1.min.js"></script>
<script>
	function checkClear() {
		$('.clear').attr('checked', false);
		return false; // reset 의 기본 onclick 이벤트를 제거 (취소) 
	}
</script>
</head>
<body>
	<h2>** Member CheckList Spring_Mybatis **</h2>
	<c:if test="${not empty requestScope.message}">
		${requestScope.message}<br>
	</c:if>
	<hr>
	<!-- Board checkList 에 SrearchCri 적용하여 Paging 기능 추가 
		= Mybatis, mapper 의 반복문 Test 
	-->
	<div id="searchBar">
		<form action="mchecklist" method="get">
			<b>Jno : </b>
			
			<!-- 검색후에도 조건을 유지하고 취소버튼 클릭시에는,
            조건만 clear 되도록 function checkClear() 추가함 
            (reset 버튼은 기본적으로 새로고침과 동일하게 처리되어 
            ${pageMaker.cri.check} 로 전달된 조건이 계속 적용되기때문)  -->
           
			<c:set var="ck1" value="false" />
			<c:set var="ck2" value="false" />
			<c:set var="ck3" value="false" />
			<c:set var="ck4" value="false" />
			<c:set var="ck5" value="false" />

			<c:forEach var="jno" items="${pageMaker.cri.check}">
				<c:if test="${jno=='1'}">
					<c:set var="ck1" value="true" />
				</c:if>
				<c:if test="${jno=='2'}">
					<c:set var="ck2" value="true" />
				</c:if>
				<c:if test="${jno=='3'}">
					<c:set var="ck3" value="true" />
				</c:if>
				<c:if test="${jno=='4'}">
					<c:set var="ck4" value="true" />
				</c:if>
				<c:if test="${jno=='5'}">
					<c:set var="ck5" value="true" />
				</c:if>
			</c:forEach>
			<input type="checkbox" name="check" value="1" class="clear"
				${ck1 ? 'checked' : '' }>1조&nbsp; 
			<input type="checkbox" name="check" value="2" class="clear" 
				${ck2 ? 'checked' : '' }>2조&nbsp;
			<input type="checkbox" name="check" value="3" class="clear"
				${ck3 ? 'checked' : '' }>3조&nbsp; 
			<input type="checkbox" name="check" value="4" class="clear" 
				${ck4 ? 'checked' : '' }>4조&nbsp;
			<input type="checkbox" name="check" value="5" class="clear"
				${ck5 ? 'checked' : '' }>5조&nbsp; 
			<input type="submit" value="검색">&nbsp; 
			<input type="reset" value="취소" onclick="checkClear()">&nbsp;
		</form>
	</div>
	<br>
	<hr>

	<table width=100%>
	<tr bgcolor="Lavender">
		<th>I D</th>
		<th>P W</th>
		<th>Name</th>
		<th>Age</th>
		<th>Jno</th>
		<th>Info</th>
		<th>Point</th>
		<th>Birthday</th>
		<th>추천인</th>
		<th>Image</th>
	</tr>
	<c:if test="${not empty banana}">
		<c:forEach var="s" items="${banana}" >
		<tr>
			<td>
			 <c:if test="${sessionScope.loginID == 'admin'}">
				<a href="mdetail?id=${s.id}">${s.id}</a>
			</c:if>
			<c:if test="${sessionScope.loginID != 'admin'}">
				${s.id}
			</c:if>
			</td>
			
			<td>${s.password}</td>
			<td>${s.name}</td>
			<td>${s.age}</td>
			<td>${s.jno}</td>
			<td>${s.info}</td>
			<td>${s.point}</td>
			<td>${s.birthday}</td>
			<td>${s.rid}</td>
			<td><img alt="memberImage" src="${s.uploadfile}" width=50px height=50px></td>
		</tr>
		</c:forEach>
	</c:if>
	<c:if test="${empty banana}">
		** 출력할 자료가 1건도 없습니다. **
	</c:if>
	</table>
	<hr>

	<div align="center">
		<!-- ** Cri_Paging **
		1) FirstPage, Prev -->
		<c:choose>
			<c:when test="${pageMaker.prev && pageMaker.spageNo>1}">
				<!-- New_ver01_Criteria : pageMaker.makeQuery(...) 
			 New_ver02_SearchCriteria : pageMaker.searchQuery(...) 
		-->
				<a href="mchecklist${pageMaker.searchQuery(1)}">FP</a>&nbsp;
			<a href="mchecklist${pageMaker.searchQuery(pageMaker.spageNo-1)}">&lt;</a>


				<!-- OLD_version 
			<a href="bcrilist?currPage=1&rowsPerPage=5">FP</a>&nbsp;
			<a href="bcrilist?currPage=${pageMaker.spageNo-1}&rowsPerPage=5">&lt;</a>
		-->
			</c:when>
			<c:otherwise>
				<font color="Gray">FP&nbsp;&lt;&nbsp;&nbsp;</font>
			</c:otherwise>

		</c:choose>

		<!-- 2) Display PageNo  -->
		<c:forEach var="i" begin="${pageMaker.spageNo}"
			end="${pageMaker.epageNo}">
			<c:if test="${i==pageMaker.cri.currPage}">
				<font size="5" color="Purple">${i}</font>&nbsp;
		</c:if>
			<c:if test="${i!=pageMaker.cri.currPage}">

				<!-- NEW_ver01 Criteria => ver02 -->
				<a href="mchecklist${pageMaker.searchQuery(i)}">${i}</a>&nbsp;
		
		<!-- OLD_version 
			<a href="bcrilist?currPage=${i}&rowsPerPage=5">${i}</a>&nbsp;
		-->
			</c:if>

		</c:forEach>

		<!-- 3) Next, LastPage -->
		<c:choose>
			<c:when test="${pageMaker.next && pageMaker.epageNo > 0}">
				<!-- NEW_ver01 Criteria => ver02 -->
				<a href="mchecklist${pageMaker.searchQuery(pageMaker.epageNo+1)}">&nbsp;&gt;</a>
				<a href="mchecklist${pageMaker.searchQuery(pageMaker.lastPageNo)}">&nbsp;LP</a>

				<!-- OLD_version
			<a href="bcrilist?currPage=${pageMaker.epageNo+1}&rowsPerPage=5">&nbsp;&gt;</a>
			<a href="bcrilist?currPage=${pageMaker.lastPageNo}&rowsPerPage=5">&nbsp;LP</a>
		-->

			</c:when>
			<c:otherwise>
				<font color="Gray">&nbsp;&gt;&nbsp;LP</font>
			</c:otherwise>

		</c:choose>


	</div>
	<hr>
	<c:if test="${sessionScope.loginID != null}">
&nbsp;<a href="minsert">새글등록_F</a>&nbsp;
</c:if>

	&nbsp;
	<a href="javascript:history.go(-1)">이전으로</a>&nbsp; &nbsp;
	<a href="home">[Home]</a>&nbsp;

</body>
</html>