<%@page import="vo.BoardVO"%>
<%@page import="java.util.List"%>
<%@page import="service.BoardServiceImpl"%>
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
	<h2>** Board CheckList Spring_Mybatis **</h2>
	<c:if test="${not empty requestScope.message}">
		${requestScope.message}<br>
	</c:if>
	<hr>
	<!-- Board checkList 에 SrearchCri 적용하여 Paging 기능 추가 
		= Mybatis, mapper 의 반복문 Test 
	-->
	<div id="searchBar">
		<form action="bchecklist" method="get">
			<b>ID : </b>
			
			<!-- 검색후에도 조건을 유지하고 취소버튼 클릭시에는,
            조건만 clear 되도록 function checkClear() 추가함 
            (reset 버튼은 기본적으로 새로고침과 동일하게 처리되어 
            ${pageMaker.cri.check} 로 전달된 조건이 계속 적용되기때문)  -->
           
			<c:set var="ck1" value="false" />
			<c:set var="ck2" value="false" />
			<c:set var="ck3" value="false" />
			<c:set var="ck4" value="false" />
			<c:set var="ck5" value="false" />

			<c:forEach var="id" items="${pageMaker.cri.check}">
				<c:if test="${id=='admin'}">
					<c:set var="ck1" value="true" />
				</c:if>
				<c:if test="${id=='apple'}">
					<c:set var="ck2" value="true" />
				</c:if>
				<c:if test="${id=='banana'}">
					<c:set var="ck3" value="true" />
				</c:if>
				<c:if test="${id=='green'}">
					<c:set var="ck4" value="true" />
				</c:if>
				<c:if test="${id=='hsy'}">
					<c:set var="ck5" value="true" />
				</c:if>
			</c:forEach>
			<input type="checkbox" name="check" value="admin" class="clear"
				${ck1 ? 'checked' : '' }>관리자&nbsp; <input type="checkbox"
				name="check" value="apple" class="clear" ${ck2 ? 'checked' : '' }>Apple&nbsp;
			<input type="checkbox" name="check" value="banana" class="clear"
				${ck3 ? 'checked' : '' }>Banana&nbsp; <input type="checkbox"
				name="check" value="green" class="clear" ${ck4 ? 'checked' : '' }>Green&nbsp;
			<input type="checkbox" name="check" value="hsy" class="clear"
				${ck5 ? 'checked' : '' }>Hsy&nbsp; <input type="submit"
				value="검색">&nbsp; 
				<input type="reset" value="취소" onclick="checkClear()">&nbsp;
		</form>
	</div>
	<br>
	<hr>

	<table width=100%>
		<tr bgcolor="lavender">
			<th>Seq</th>
			<th>Title</th>
			<th>I D</th>
			<th>RegDate</th>
			<th>조회수</th>
		</tr>

		<c:if test="${not empty banana}">
			<c:forEach var="s" items="${banana}">
				<tr>
					<td>${s.seq}</td>
					<td>
						<!-- 댓글 등록 후 indent 에 따른 들여쓰기 
						=> 댓글의 경우에만 들여쓰기 적용 --> <c:if test="${s.indent > 0}">
							<c:forEach begin="1" end="${s.indent}">
								<span>&nbsp;&nbsp;</span>
							</c:forEach>
							<span style="color: blue;">re..</span>
						</c:if> <!-- 로그인 한 경우에만 title 을 클릭하면 content 를 볼 수 있도록 함
							=> bdetail 을 실행함 --> <c:if test="${sessionScope.loginID != null}">
							<a href="bdetail?seq=${s.seq}">${s.title}</a>
						</c:if> <c:if test="${sessionScope.loginID == null}">
			${s.title}
		</c:if>
					</td>
					<td>${s.id}</td>
					<td>${s.regdate}</td>
					<td>${s.cnt}</td>
				</tr>
			</c:forEach>
		</c:if>
		<c:if test="${empty banana}">
		** 출력할 자료가 1건도 없습니다 ** 
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
				<a href="bchecklist${pageMaker.searchQuery(1)}">FP</a>&nbsp;
			<a href="bchecklist${pageMaker.searchQuery(pageMaker.spageNo-1)}">&lt;</a>


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
				<a href="bchecklist${pageMaker.searchQuery(i)}">${i}</a>&nbsp;
		
		<!-- OLD_version 
			<a href="bcrilist?currPage=${i}&rowsPerPage=5">${i}</a>&nbsp;
		-->
			</c:if>

		</c:forEach>

		<!-- 3) Next, LastPage -->
		<c:choose>
			<c:when test="${pageMaker.next && pageMaker.epageNo > 0}">
				<!-- NEW_ver01 Criteria => ver02 -->
				<a href="bchecklist${pageMaker.searchQuery(pageMaker.epageNo+1)}">&nbsp;&gt;</a>
				<a href="bchecklist${pageMaker.searchQuery(pageMaker.lastPageNo)}">&nbsp;LP</a>

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
&nbsp;<a href="binsert">새글등록_F</a>&nbsp;
</c:if>

	&nbsp;
	<a href="javascript:history.go(-1)">이전으로</a>&nbsp; &nbsp;
	<a href="home">[Home]</a>&nbsp;

</body>
</html>