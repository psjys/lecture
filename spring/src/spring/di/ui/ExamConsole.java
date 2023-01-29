package spring.di.ui;

import spring.di.entity.Exam;

//ExamConsole : Exam 을 출력해줌
public interface ExamConsole {
		void print();
		void setExam();
		void setExam(Exam exam);
}