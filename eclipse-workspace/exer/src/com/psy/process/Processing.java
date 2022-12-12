package com.psy.process;

import com.psy.inner_share.Sharedata;

public class Processing {
	public static void process (int inputData) {
		for (int i = 0; i < Sharedata.data.length ; i++) {
			Sharedata.data[i] += inputData;
		}
	}
}
