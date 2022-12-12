package com.psy.outset;

import com.psy.inner_share.Sharedata;

public class Output {
	public static void output() {
		for (int d : Sharedata.data) {
			System.out.print(d+ " ");
		}
	}
}
