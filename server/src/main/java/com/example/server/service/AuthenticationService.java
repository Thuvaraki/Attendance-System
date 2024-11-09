package com.example.server.service;

import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

@Service
public class AuthenticationService {
    public boolean validateUser(String username, String password) {
        Scanner scanner = null;
        try {
            File file = new File("C:\\Users\\Admin\\Downloads\\attendance system\\docs\\credentials.txt");
            System.out.println("File exists: " + file.exists());

            scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line); // Debugging line

                String[] credentials = line.split(",");
                if (credentials[0].equals(username) && credentials[1].equals(password)) {
                    return true;
                }
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } finally {
            if (scanner != null) {
                scanner.close();
            }

        }
        return false;
    }
}
