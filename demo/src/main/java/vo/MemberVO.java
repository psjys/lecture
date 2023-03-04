package vo;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

//** VO (Value Object) , DTO (Data Transfer Object)
//=> 맴버변수 : private (Table의 컬럼명과 동일)
//=> 외부에서는 setter/getter 로 접근
//=> @Override toString()

//** Lombok
//	setter, getter, toString, 생성자 등을 자동으로 만들어줌
//	코드를 줄이고 가독성을 높여 편리하지만, 장.단점이 있어 충분히 고려 후 사용해야 한다.  
//  컴파일 단계에서 애너테이션에 따라 여러가지 메소드나 코드를 자동적으로 추가해줌.
//=> 모든 필드의  public setter 와  getter 를 사용하는 일반적인 경우 유용하며, 
//=> 보안을 위해 setter 와  getter 의 접근 범위를 지정해야 하는 경우 등
//=> 대규모의 프로젝트에서 다양한 setter 와  getter code를 작성하는 경우에는 충분히 고려해야함. 

//=> @Data 즉, 다음 애너테이션을 모두 한번에 처리 한다.
//=> @Getter(모든 필드) : getter 생성하도록 지원
//=> @Setter(모든 필드-final로 선언되지 않은) : setter를 생성하도록 지원
//=> @ToString :  모든 필드를 출력하는 toString() 메소드 생성 

@Data
//=> 정의된 모든 필드에 대한 
//	Getter, Setter, ToString 과 같은 모든 요소를 한번에 만들어주는 애너테이션.
public class MemberVO {
	
	private String id;
	private String password;
	private String name;
	private int age;
	private int jno;
	private String info;
	private Double point;
	private String birthday;
	private String rid;   		// 추천인
	private String uploadfile;	// uploadFile_Path : Table 저장 위함
	
	private MultipartFile uploadfilef;
	// => form 의 Upload_File 정보를 전달받기위한 필드
	//    MultipartFile (Interface) -> CommonsMultipartFile

} //class
