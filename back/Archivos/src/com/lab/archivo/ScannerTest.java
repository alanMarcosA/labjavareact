package com.lab.archivo;

import java.util.Scanner;

public class ScannerTest {

	public static void main(String[] args) {
		
		Scanner s = new Scanner(System.in);
		System.out.println("Introduzca Nombre: ");
		String nombre = s.nextLine();
		System.out.println("Introduzca Apellido: ");
		String apellido = s.nextLine();
		System.out.println("Introduzca Ocupaci�n: ");
		String ocupaci�n = s.nextLine();
		s.close();

		System.out.println("Nombre y apellido: " + nombre + " " + apellido
				+ " - Ocupaci�n: " + ocupaci�n);
		
	}

}
