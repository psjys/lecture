package com.psy.main;

import com.psy.inset.Input;
import com.psy.outset.Output;
import com.psy.process.Processing;


public class Main {
	public static void main(String[] args) {
		Processing.process (Input.inputSet());
		Output.output();
	}
}
