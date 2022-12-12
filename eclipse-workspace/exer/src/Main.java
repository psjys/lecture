abstract class Unit {
	int x, y;

	abstract void move(int x, int y);

	void stop() {
		System.out.println("멈춥니다.");
	}

}

interface Fightable { // 인터페이스의 모든 메서드는 예외 없이 public abstract.
	void move(int x, int y); // public abstract 가 생략됨

	void attack(Fightable f); // public abstract 가 생략됨
}

class Fighter extends Unit implements Fightable {
	// 오버라이딩 규칙 : 조상 (public)보다 접근 제어자가 좁으면 안된다 (public 생략없이 붙여줘야함)
	public void move(int x, int y) {
		System.out.println("[" + x + "," + y + "] 로 이동");
	}

	public void attack(Fightable f) {
		System.out.println(f + "를 공격");
	}
}

public class Main {
	public static void main(String[] args) {
		Fighter f = new Fighter();
		f.move(100, 200);
//		f.attack(new Fighter()); // toString() 호출 됨. 이 문장은 아래 같이 쓸 수 있음
		
		Fighter f2 = new Fighter();
		f.attack(f2);
		
		
	}
}