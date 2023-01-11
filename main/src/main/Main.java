package main;

import java.util.Scanner;

class Main {
    public static void main(String [] arg) {
        Scanner sc = new Scanner(System.in);
        int a , b;
        a = sc.nextInt();
        b = sc.nextInt();

        System.out.println((b%10)*a);
        System.out.println((b/10 - ((b/100)*10))*a);
        System.out.println((b/100) * a);
        

    }
}
