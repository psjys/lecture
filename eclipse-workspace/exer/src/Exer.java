
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
//import java.util.Scanner;
//
//public class Exer {
//
//	public static void main(String[] args) {
//		Scanner sc = new Scanner(System.in);
//		int n1, n2;
//		int tmp;
//		int[] arr = { 7, 6, 1, 9, 3 };
//
//		for (int i = 0; i < arr.length-1; i++) {
//			for (int j = i + 1; j < arr.length; j++) {
//				if (arr[i] > arr[j]) {
//					tmp = arr[i];
//					arr[i] = arr[j];
//					arr[j] = tmp;
//				}
//			}
//		}
////		for (int i = 0; i < arr.length; i++) {
////			System.out.print(arr[i] + " ");
//		for (int i : arr) {
//			System.out.println(i);
//		}
//	}
//}

// 221121 리버스 
//import java.util.Scanner;
//
//public class Exer {
//
//	public static void main(String[] args) {
//		Scanner sc = new Scanner(System.in);
//		int n1, n2;
//		int tmp;
//		int[] arr = { 7, 6, 1, 9, 3 };
//
//		for (int i = 0; i < arr.length-1; i++) {
//			for (int j = i + 1; j < arr.length; j++) {
//				if (arr[i] > arr[j]) {
//					tmp = arr[i];
//					arr[i] = arr[j];
//					arr[j] = tmp;
//				}
//			}
//		}
//		for (int i = 0, t; i < arr.length/2; i++) {
//			t = arr[i];
//			arr[i] = arr[arr.length];
//			arr[arr.length] = t;
//			
//		}
//		for (int i : arr) {
//			System.out.println(i);
//		}
//	}
//}

// 221121 bubble sort 

//public class Exer {
//
//	public static void main(String[] args) {
//		int tmp;
//		int[] arr = { 17, 6, 5, 7, 13, 9, 11 };
//		
//		for (int i = 0 ; i < arr.length - 1 ; i++) {
//			for(int j = 0 ; j < arr.length -1 - i ; j++) {
//				if (arr[j] > arr[j+1]) {
//					tmp = arr[j];
//					arr[j]=arr[j+1];
//					arr[j+1]=tmp;
//				}
//			}
//		}
//		for (int i : arr) {
//		System.out.println(i);
//		}
//		
//	}
//}

// 221121 bubble sort 확장 - 실행횟수 올리기 
//public class Exer {
//
//	public static void main(String[] args) {
//		int tmp;
//		int[] arr = { 17, 6, 5, 7, 13, 9 };
//		int cnt = 0;
//
//		for (int i = 0, flag; i < arr.length - 1; i++) {
//			flag =  0;		// 교환 미발생 
//			for (int j = 0; j < arr.length - 1 - i; j++) {
//				
//				if (arr[j] > arr[j + 1]) {	// 정렬 규칙에 부합되지 않으니까 진입 
//					tmp = arr[j];			// 만약 정렬이 이미 됐다면 진입 자체가 불가
//					arr[j] = arr[j + 1];	
//					arr[j + 1] = tmp;
//					
//					flag = 1; 		// 0이 아닌 숫자 아무거나  break가 실행되지 않게 하기 위해 
//				}
//				
//				cnt++;
//			}
//			if (flag == 0) break;
//		}
//		for (int i : arr) {
//			System.out.println(i);
//		}
//
//		System.out.println("\n" + cnt);
//	}
//}

//public class Exer {
//
//	public static void main(String[] args) {
//		int [][] a = new int [2][];
//		for (int i = 0; i < a.length ; i++) {
//			a[i] = new int [3];
//		}
//		for (int i = 0, v = 1 ; i < a.length ; i++) {
//			for (int j = 0 ; j < a[i].length; j++) {
//				a[i][j] = v++;
//			}
//		}
//		for (int [] is : a) {
//			for (int i:is) {
//				System.out.print(i);
//			}
//			System.out.println();
//		}
//	}
//}

//public class Exer {
//
//	public static void main(String[] args) {
//		
//		int [][] ar1 = {	// 2차원 배열의 선언과 초기화 
//				{1, 2, 3},
//				{4, 5, 6}
//		};
//		
//		int [][][] ar2 = {	// 3차원 배열의 선언과 초기화 
//			{
//				{1, 2, 3},
//				{4, 5, 6}		
//			},
//			{
//				{7, 8, 9},
//				{10, 11, 12}
//			}
//		};
//		for ( : ar1) // 배열 첫주소 : 
//			// 좌변에 배열의 요소값을 받을 수 있는 임시 변수 넣음 
//			
//		for (int i = 0 ; i < ar1.length ; i++) {
//			for (int j = 0 ; j <ar1[0].length; j++) {
//				System.out.print(ar1[i][j] + " ");
//			}
//			System.out.println();
//		}
//		System.out.println();
//		
//		for (int i = 0 ; i < ar2.length ; i++) {
//			for (int j = 0 ; j <ar2[0].length ; j++) {
//				for (int j2 = 0; j2 < ar2[0][0].length ; j2++) {
//					System.out.print(ar2[i][j][j2] + " ");
//				}
//				System.out.println();
//			}
//			System.out.println();
//		}
//	}
//}
//public class Exer {
//
//	public static void main(String[] args) {
//		char [] str = {'a', 'b', 'c'};
//		
//		System.out.println(str);
//	}
//}
//
//public class Exer {
//
//	public static void main(String[] args) {
//		int[] a1 = {1, 2, 3};
//		int[] a2 = {1, 2};
//		int[] a3 = {1, 2, 3, 4};
//		int[] a4 = {1, 2, 3, 4, 5, 6, 7};
//		int[] a5 = {1, 2, 3, 4, 5, 6};
//		
////		int[][] a = new int [][] {a1, a2, a3, a4, a5}; - 원식 
//		int[][] a = {a1, a2, a3, a4, a5};
//		
//		for (int [] i : a) {
//			for (int j : i) {
//				System.out.printf("%d ",j);
//			}
//			System.out.println();
//		}
//	}
//}
import java.util.Scanner;

public class Exer {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int boardSize = 10;
		int n1 = 0;
		int n2 = 0;

		char[][] board = new char[boardSize][boardSize]; // 출력 할 배열
		int[][] shipBoard = { // 배가 존재하는 위치를 저장한 배열. ( 0 : 없음, 1 : 있음 )
				// char type 배열
				// 1 2 3 4 5 6 7 8 9
				{ 0, 0, 0, 0, 0, 0, 1, 0, 0 }, // 1
				{ 1, 1, 1, 1, 0, 0, 1, 0, 0 }, // 2
				{ 0, 0, 0, 0, 0, 0, 1, 0, 0 }, // 3
				{ 0, 0, 0, 0, 0, 0, 1, 0, 0 }, // 4
				{ 0, 0, 0, 0, 0, 0, 0, 0, 0 }, // 5
				{ 1, 1, 0, 1, 0, 0, 0, 0, 0 }, // 6
				{ 0, 0, 0, 1, 0, 0, 0, 0, 0 }, // 7
				{ 0, 0, 0, 1, 0, 0, 0, 0, 0 }, // 8
				{ 0, 0, 0, 0, 0, 1, 1, 1, 0 }, // 9
		};

		for (int i = 0; i < boardSize; i++) {
			for (int j = 0; j < boardSize; j++) {
				board[i][j] = ' ';
			}
		}

		for (int i = 1; i < boardSize; i++) {
			board[0][i] = board[i][0] = (char) (i + '0');
		}

		while (true) {
			System.out.print("좌표를 입력하세요. (종료는 00) >");
			String num = sc.nextLine();
			if (num.length() == 2) {
				n1 = num.charAt(0) - '0';
				n2 = num.charAt(1) - '0';
				if (n1 == 0 && n2 == 0) {
					System.out.println("게임 종료");
					break;
				}
				if (num.length() != 2 || n1 < 0 || n2 < 0 || n1 > boardSize || n2 > boardSize) {
					System.out.println("잘못된 입력입니다. 다시 입력해주세요.");
					continue;
				}
				board[n1][n2] = shipBoard[n1 - 1][n2 - 1] == 1 ? 'O' : 'X';
			}
			for (int i = 0; i < boardSize; i++) {
				System.out.println(board[i]);
			}
			System.out.println();
		}
	}
}
