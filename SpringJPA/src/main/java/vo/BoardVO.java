package vo;

import java.beans.Transient;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

//** VO (Value Object) , DTO (Data Transfer Object)
//=> 멤버변수 : private (Table의 컬럼명과 동일)
//=> 외부에서는 setter/getter 로 접근
//=> @Override toString()

//** ORM 에 적용 되는 객체
//=> VO 가 테이블에 매핑됨을 표시 : @Entity
//=> 매핑되는 테이블을 지정 : @Table
//=> 테이블에 매핑되는 컬럼과 P.Key 표시

@Data
@Entity
@Table(name = "board")
//=> Entity에 해당하는 테이블을 name 속성을 사용하여 매핑함.
//=> name 생략시에는 클래스의 이름이 매핑됨
public class BoardVO {
	@Id // 테이블의 기본(Primary) key 와 매핑함
	@GeneratedValue // @ID 로 설정된 기본키의 값을 자동 생성할 때 사용
	private int seq;
	private String id;
	private String title;
	private String content;
	private String regdate;
	private int cnt;
	private int root;
	private int step;
	private int indent;
/*
	@Transient // sql 구문 처리 시 제외시켜줌
	private String test;

	@Temporal(TemporalType.TIMESTAMP)
	// => 날짜 타입의 변수에 선언하여 날짜타입을 매핑
	// 		TemporalType.DATE : 날짜 정보만 출력
	// 		TemporalType.TIME : 시간정보만 출력
	// 		TemporalType.TIMESTEMP : 날짜 시간 모두
	private Date myDate = new Date();
*/
} // BoardVO
