package com.psy.design;

import com.psy.data.SharedData;

class Util { // B팀에서 사용하기한 유틸 클래스. 엑세스 지정자가 디폴트로 되어있으므로
          // 유틸 클래스는 현재 패키지 내에서만 접근 가능.
	// 유틸 클래스 작성 - 공유하는 데이터라면 공유에서 쓸건ㄷ[ 부서에써 쓰러면 다르게
	// 클래스가 겹치면 안돼서패키지를 만드는데 이름이 같으면 충돌 일어나니까 그래서 패키지를 나누는 것
	// 이름 중복을 막기 위해서 패키지를 씀 
}

public class DesignTeam {       // B팀
   private static final int ACCESS_PASSWORD = 1234;   // 공유 데이터에 접근하기 위한 접근용 패스워드

   public static void main(String[] args) {
      SharedData sharedData = new SharedData();

      System.out.println("B팀 공유 데이터 접근 : " + sharedData.accessData(ACCESS_PASSWORD));
   }
}