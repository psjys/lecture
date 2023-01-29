package spring.di.ui;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import spring.di.entity.Exam;

//InlineExamConsole : 한줄로 출력 

@Component
public class InlineExamConsole implements ExamConsole {
	@Autowired(required = false)
	@Qualifier("exam1")
	private Exam exam;
	
	public InlineExamConsole() {
		System.out.println("constructor");
	}

	@Autowired
	public InlineExamConsole(
			@Qualifier("exam2") Exam exam) {
		System.out.println("overload constructor");
		this.exam = exam;
	}

	@Override
	public void print() {
		if(exam == null) {
			System.out.printf("total is %d, avg is %f\n", 0, 0.0);			
		} else {
			System.out.printf("total is %d, avg is %f\n", exam.total(), exam.avg());
		}
	}


	@Override
	public void setExam(Exam exam) {
		System.out.println("setter");
		this.exam = exam;
	}

	@Override
	public void setExam() {
		// TODO Auto-generated method stub
		
	}

}