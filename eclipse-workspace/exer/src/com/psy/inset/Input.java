package com.psy.inset;

import java.util.Scanner;

public class Input {
	public static int inputSet() {
		Scanner scanner = new Scanner(System.in);
		int inputData;
		
		System.out.print("정수 데이터 입력 : ");
		inputData = scanner.nextInt();
		scanner.close();
		
		return inputData;
	}
}
