package com.psy.outer;

import com.psy.data.SharedData;

public class Outsourcing {      // 외주팀
   public static void main(String[] args) {
      SharedData sharedData = new SharedData();

      System.out.println("외주팀 공유 데이터 접근 : " + sharedData.accessData(1111));
   }
}