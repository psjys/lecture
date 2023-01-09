package main;

import java.util.Scanner;

class Main {
    public static void main(String [] arg) {
        Scanner sc = new Scanner();
        int a , b;
        a = nextInt();
        b = nextInt();

        System.out.println((b%10)*a);
        System.out.println((b/10 - ((b/100)*10))*a);
        System.out.println((b/100) * a);
        

    }
}
