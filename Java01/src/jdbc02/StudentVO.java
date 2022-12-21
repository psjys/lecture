package jdbc02;

//** VO (Value Object) , DTO (Data Transfer Object)
//=> 자료의 구조를 표현하는 클래스이며, 자료의 전달에 이용됨
//=> 대부분 Table 별로 만들며, Table 과 동일한 필드명을 사용한다. 테이블과 1대1 매칭. 컬럼명도 테이블과 같게 설정 
//=> Table과 무관하게 자료전달용으로만 정의한 경우 DTO 라 함. 데이터 실어 나르는 역할 
// setter getter 필수적으로 만듦 

// 멤버 변수 : private 
// 외부에서는 setter / getter 로 접근 

public class StudentVO { // 조상이 object 
	private String id;
	private String name;
	private int age;
	private int jno;
	private String info;
	private Double point;
	private String birthday;
	
	public String getId() { //컬럼명의 첫글자를 대문자로 작성 
		return id;
	}
	public void setId(String id) { 
		this.id = id; 
	} 
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getJno() {
		return jno;
	}
	public void setJno(int jno) {
		this.jno = jno;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public Double getPoint() {
		return point;
	}
	public void setPoint(Double point) {
		this.point = point;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	
	@Override 
	public String toString() {
		return "StudentVO [id=" + id + ", name=" + name + ", age=" + age + ", jno=" + jno + ", info=" + info
				+ ", point=" + point + ", birthday=" + birthday + "]";
	}
	
} // class 
