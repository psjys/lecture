
//import java.util.Scanner;
//
//public class Exer {
//
//	public static void main(String[] args) {
//		Scanner sc = new Scanner(System.in);
//
//		String[] name;
//		int[] stNum;
//		int[] score;
//
//		System.out.print("입력 받을 인원 수 입력 : ");
//		int student = sc.nextInt();
//
//		System.out.println("성명, 학번, 점수를 입력하시오!!");
//
//		name = new String[student];
//		stNum = new int[student];
//		score = new int[student];
//
//		for (int i = 0; i < student; i++) {
//
//			System.out.print("\n\n성명 : ");
//			name[i] = sc.next();
//
//			System.out.print("학번 : ");
//			stNum[i] = sc.nextInt();
//
//			System.out.print("점수 : ");
//			score[i] = sc.nextInt();
//
//		}
//		System.out.printf("\n\n%-5s %-4s %s\n", "성 명", "학 번", "점 수");
//		System.out.printf("%-5s %04d %4d\n", name[0], stNum[0], score[0]);
//		System.out.printf("%-5s %04d %4d\n", name[1], stNum[1], score[1]);
//		System.out.printf("%-5s %04d %4d\n", name[2], stNum[2], score[2]);
//		
//		System.out.printf("\n총점 : %d, 평균 : %d", score[0] + score[1] + score[2], (score[0] + score[1] + score[2]) / 3);
//
//		sc.close();
//	}
//
//}
import java.util.Scanner;

public class Exer {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n1, n2;
		int tmp;
		int[] arr = { 7, 6, 1, 9, 3 };

		for (int i = 0; i < arr.length-1; i++) {
			for (int j = i + 1; j < arr.length; j++) {
				if (arr[i] > arr[j]) {
					tmp = arr[i];
					arr[i] = arr[j];
					arr[j] = tmp;
				}
			}
		}
//		for (int i = 0; i < arr.length; i++) {
//			System.out.print(arr[i] + " ");
		for (int i : arr) {
			System.out.println(i);
		}
	}
}
