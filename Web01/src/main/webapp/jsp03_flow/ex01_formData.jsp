<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Form : input Parameter Test **</title>
</head>
<body>
<h2>** Form : input Parameter Test **</h2>
<form action="ex01_formReceive.jsp" method="post">
   * I D : <input type="text" name="id" value="banana"><br>
   * Name: <input type="text" name="name" value="바나나"><br><br>
   * 좋아하는 동물은 ?<br>
      <input type="checkbox" name="pet" value="강아지">강아지<br>
      <input type="checkbox" name="pet" value="고양이">고양이<br>
      <input type="checkbox" name="pet" value="pig">꿀꿀이<br>
      <input type="checkbox" name="pet" value="eagle">독수리<br><br>
       <input type="submit" value="전송">&nbsp;&nbsp;  
      <input type="reset" value="취소"><br>  
</form>
</body>
</html>