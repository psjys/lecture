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
<title>** Board CriList Spring_Mybatis **</title>
<link rel="stylesheet" type="text/css"
	href="resources/mylib/myStyle.css">
<script src="resources/myLib/jquery-3.2.1.min.js"></script>
<script>
   $(function(){  
   // 1) SearchType 이 '전체' 면 keyword 클리어
      $('#searchType').change(function(){    
         if ( $(this).val()=='n' ) $('#keyword').val('');
      }); //change

   // 2) 검색 후 요청 
   // => 외부문서로 작성하면 EL Tag 해석 불가능 
      $('#searchBtn').click(function(){
         let url = 'axbcri'
                  + '${pageMaker.makeQuery(1)}'
                  + '&searchType='+$('#searchType').val() 
                  + '&keyword='+$('#keyword').val();
         axBoardcri(url)   ;   
      }); //click
      
   // 3) Page 요청
   // => 요청 Page에 해당하는 url 가져오기
   // => aTag 를 span으로 변경후 onclick 이벤트핸들러 axBoardcri(url) 사용
       
   }); // ready
   </script>
</head>
<body>
	<h2>** Board CriList Spring_Mybatis **</h2>
	<c:if test="${not empty requestScope.message}">
      ${requestScope.message}<br>
	</c:if>
	<hr>

	<div id="searchBar">
		<select name="searchType" id="searchType">
			<option value="n"
				${pageMaker.cri.searchType == null ? 'selected' : ''}>전체</option>
			<option value="t"
				${pageMaker.cri.searchType == 't' ? 'selected' : ''}>Title</option>
			<option value="c"
				${pageMaker.cri.searchType == 'c' ? 'selected' : ''}>Content</option>
			<option value="i"
				${pageMaker.cri.searchType == 'i' ? 'selected' : ''}>ID(글쓴이)</option>
			<option value="r"
				${pageMaker.cri.searchType == 'r' ? 'selected' : ''}>RegDate</option>
			<option value="tc"
				${pageMaker.cri.searchType == 'tc' ? 'selected' : ''}>Title
				or Content</option>
			<option value="tci"
				${pageMaker.cri.searchType == 'tci' ? 'selected' : ''}>Title
				or Content or ID</option>
		</select> <input type="text" name="keyword" id="keyword"
			value="${pageMaker.cri.keyword}">
		<button id="searchBtn">Search</button>
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
                  => 댓글의 경우에만 들여쓰기 적용 --> 
                  <c:if test="${s.indent > 0}">
							<c:forEach begin="1" end="${s.indent}">
								<span>&nbsp;&nbsp;</span>
							</c:forEach>
							<span style="color: blue;">re..</span>
				  </c:if> ${s.title}
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
   1) FirstPage, Prev  -->
  <c:choose>
   <c:when test="${pageMaker.prev && pageMaker.spageNo>1 }">
      <span class="textlink" onclick="axBoardcri('axbcri${pageMaker.searchQuery(1)}')">FP</span>&nbsp;
      <span class="textlink" onclick="axBoardcri('axbcri${pageMaker.searchQuery(pageMaker.spageNo-1)}')">&lt;</span>&nbsp;&nbsp;
   </c:when>
   <c:otherwise>
      <font color="Gray">FP&nbsp;&lt;&nbsp;&nbsp;</font>
   </c:otherwise>
  </c:choose>
  
<!-- 2) Display PageNo -->
  <c:forEach var="i" begin="${pageMaker.spageNo}" end="${pageMaker.epageNo}">
     <c:if test="${i==pageMaker.cri.currPage}">
        <font size="5" color="Orange">${i}</font>&nbsp;       
     </c:if>
     <c:if test="${i!=pageMaker.cri.currPage}">
        <span class="textlink" onclick="axBoardcri('axbcri${pageMaker.searchQuery(i)}')">${i}</span>&nbsp;
     </c:if>
  </c:forEach>

<!-- 3) Next, LastPage -->
  <c:choose>
   <c:when test="${pageMaker.next && pageMaker.epageNo>0 }">
      <span class="textlink" onclick="axBoardcri('axbcri${pageMaker.searchQuery(pageMaker.epageNo+1)}')">&nbsp;&gt;</span>
      <span class="textlink" onclick="axBoardcri('axbcri${pageMaker.searchQuery(pageMaker.lastPageNo)}')">&nbsp;LP</span>
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