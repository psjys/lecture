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
   <link rel="stylesheet" type="text/css" href="resources/mylib/myStyle.css">
   <script src="resources/myLib/jquery-3.2.1.min.js"></script>
   <script>
   // ** JS 에서 함수사용
   // => 최상위 객체 window는 생략가능
   //       window.document.write("....");
   // => jQuery 호출
   //      -   window.jQuery('선택자_id,class,Tag..').click(function(){ ..........  })
   //     - 늘 사용해야되는 jQuery 대신 $  기호를 사용 
   //      $('#searchBtn').click(function(){ ....
   // => ready 이벤트
   //     - script 구문이 Body 보다 위쪽에 위치하면 Tag 인식이 불가능함.
   //    - Body 가 Tag들을 모두 load 한 후 실행 되도록 이벤트를 적용
   //     - js: window.onload
   //    - jQ: ready   -> $(document).ready(function() { ....... });
   //                -> 이때  "(document).ready" 는 생략가능    
   $(function(){  
   // 1) SearchType 이 '전체' 면 keyword 클리어
      $('#searchType').change(function(){    
         if ( $(this).val()=='n' ) $('#keyword').val('');
      }); //change

   // 2) 검색 후 요청 
   // => 검색조건 입력 후 첫 Page 요청
   //    이때는 서버에 searchType, keyword 가 전달되기 이전이므로 
   //     searchType, keyword 가 없는 makeQuery 메서드사용
   // => self.location="bcrilist?currPage=?????" : 해당 요청을 서버로 전달    
         
   // *** JS 코드내부에서 el Tag 사용시 주의사항
   // => JS 코드의 스트링 내에서 사용한 el Tag 는 JSP 가 처리해주므로   
   //    사용가능 하지만, 이 스크립트가 외부 문서인 경우에는 처리해주지 않으므로 주의
   //    이 코드를 외부문서로 작성하면 "${pageMaker.makeQuery(1)}" 이 글자 그대로 적용되어 404 발생 
         
   // ** self.location   
   // 1) location 객체 직접사용 Test : url로 이동, 히스토리에 기록됨
   // 2) location 객체의 메서드
   // => href, replace('...'), reload()
   
      $('#searchBtn').click(function(){
         self.location='bcrilist'
                  + '${pageMaker.makeQuery(1)}'
                  + '&searchType='+$('#searchType').val() 
                  + '&keyword='+$('#keyword').val();
      }); //click
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
         <option value="n" ${pageMaker.cri.searchType == null ? 'selected' : ''}>전체</option>
         <option value="t" ${pageMaker.cri.searchType == 't' ? 'selected' : ''}>Title</option>
         <option value="c" ${pageMaker.cri.searchType == 'c' ? 'selected' : ''}>Content</option>
         <option value="i" ${pageMaker.cri.searchType == 'i' ? 'selected' : ''}>ID(글쓴이)</option>
         <option value="r" ${pageMaker.cri.searchType == 'r' ? 'selected' : ''}>RegDate</option>
         <option value="tc" ${pageMaker.cri.searchType == 'tc' ? 'selected' : ''}>Title or Content</option>
         <option value="tci" ${pageMaker.cri.searchType == 'tci' ? 'selected' : ''}>Title or Content or ID</option>
      </select>
      <input type="text" name="keyword" id="keyword" value="${pageMaker.cri.keyword}">
      <button id="searchBtn">Search</button>
   </div>
   <br><hr>
   
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
                  <span style="color:blue;">re..</span>
               </c:if>
               
               
               <!-- 로그인 한 경우에만 title 을 클릭하면 content 를 볼 수 있도록 함
                     => bdetail 을 실행함 -->
               <c:if test="${sessionScope.loginID != null}">
                     <a href="bdetail?seq=${s.seq}">${s.title}</a>
                  </c:if> <c:if test="${sessionScope.loginID == null}">
         ${s.title}
      </c:if></td>
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
         <a href="bcrilist${pageMaker.searchQuery(1)}">FP</a>&nbsp;
         <a href="bcrilist${pageMaker.searchQuery(pageMaker.spageNo-1)}">&lt;</a>
      
      
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
   <c:forEach var="i" begin="${pageMaker.spageNo}" end="${pageMaker.epageNo}">
      <c:if test="${i==pageMaker.cri.currPage}">
         <font size="5" color="Purple">${i}</font>&nbsp;
      </c:if>
      <c:if test="${i!=pageMaker.cri.currPage}">
      
      <!-- NEW_ver01 Criteria => ver02 -->
         <a href="bcrilist${pageMaker.searchQuery(i)}">${i}</a>&nbsp;
      
      <!-- OLD_version 
         <a href="bcrilist?currPage=${i}&rowsPerPage=5">${i}</a>&nbsp;
      -->
      </c:if>
   
   </c:forEach>
   
   <!-- 3) Next, LastPage -->
   <c:choose>
      <c:when test="${pageMaker.next && pageMaker.epageNo > 0}">
      <!-- NEW_ver01 Criteria => ver02 -->
      <a href="bcrilist${pageMaker.searchQuery(pageMaker.epageNo+1)}">&nbsp;&gt;</a>
      <a href="bcrilist${pageMaker.searchQuery(pageMaker.lastPageNo)}">&nbsp;LP</a>
      
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