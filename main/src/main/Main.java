package main;

import java.util.Objects;

//public class Main {
//
//	public static void main(String[] args) {
//		Value v1 = new Value(10);
//		Value v2 = new Value(10);
//	}
//
//}
//
//class Value {
//	int value;
//	
//	Value(int value) {
//		this.value = value;
//	}
//	// Object의 equals()를 오버라이딩 해서 주소가 아닌 value를 비교 
//	public boolean equals (Object obj) {
//		// return this==obj; // 주소 비교. 서로 다른 객체는 항상 거짓 
//		// 참조 변수의 형변환 전에는 반드시 instanceOf 로 확인해야함
//		
//		
//		
//		Value v = (Value)obj; // obj를 value로 형변환 
//		
//		return this.value == v.value; 
//	}
//}

//class Card {
//	String kind;
//	int number; 
//	
//	Card() {
//		this("SPADE", 1);
//	}
//	
//	Card(String kind, int number) {
//		this.kind = kind;
//		this.number = number;
//	}
//	
//	// equals 오버라이딩 하면 hashcode도 오버라이딩 해야함 
//	public int hashCode() {
//		return Objects.hash(kind, number); // 가변인수 (매개변수 개수가 정해져있지않음) 
//		
//	}
//	
//	public boolean equals (Object obj) {
//		if(!(obj instanceof Card))
//			return false;
//		Card c = (Card)obj;
//		return this.kind.equals(c.kind) && this.number==c.number;
//	}
//	
//	public String toString() {
//		return "kind :" +kind+ ", number :"+number; 
//	}
// }
//
//class Ex9_4 {
//	public static void main(String[] args) {
//		Card c1 = new Card();
//		Card c2 = new Card();
//		
//		System.out.println(c1.equals(c2));
//		
//		System.out.println(c1.hashCode());
//		System.out.println(c2.hashCode());
//		
//		System.out.println(c1.toString());
//		System.out.println(c2.toString());
//	}
//}



