package spring.di;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import spring.di.entity.Exam;
import spring.di.entity.NewlecExam;
import spring.di.ui.ExamConsole;

public class Program {
	public static void main(String[] args) {
		/* 스프링에게 지시하는 방법으로 코드 변경
			Exam exam = new NewlecExam(); -> 요고를 xml 에서 작성
			ExamConsole console = new GridExamConsole(); 
			
			console.setExam(exam);
		*/

		ApplicationContext context = 
					new ClassPathXmlApplicationContext("spring/di/setting.xml");

		Exam exam = context.getBean(Exam.class);
		System.out.println(exam.toString());

	    ExamConsole console = (ExamConsole) context.getBean("console");
	//	ExamConsole console = context.getBean(ExamConsole.class);
			// => 위의 두가지 방법 모두 가능하지만 이게 더 선호되는 방식!! 
		console.print();

		List<Exam> exams = (List<Exam>) context.getBean("exams"); // new ArrayList<>();
		exams.add(new NewlecExam(1,1,1,1));

		for (Exam e: exams)
				System.out.println(e);

	}
}