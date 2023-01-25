package main;

class Main {
	public static void main(String[] args) {
		// 4-3
		int sum = 0;
		int totalSum = 0;
		for (int i = 1; i <= 10; i++) {
				sum+=i;
				totalSum+=sum;
		}
		System.out.println(totalSum);
	}
}