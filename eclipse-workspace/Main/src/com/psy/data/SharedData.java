package com.psy.data;

public class SharedData {            // 내부 공유 데이터
   private String data = "접근 성공";
   private final int ACCESS_PASSWORD = 1234;   // 공유 데이터에 접근하기 위한 접근용 패스워드
   
   public String accessData(int id) {   // 공유 데이터에 접근하기 위한 공개 메서드.
      if( id == ACCESS_PASSWORD ) {
         return data;
      } else {
         return null;
      }
   }
}