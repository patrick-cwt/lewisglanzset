package com.jpgl.lgs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.jpgl.lgs")
public class LewisGlanzSoftwareEngineeringTest {
    
    public static void main(String[] args) {
        SpringApplication.run(LewisGlanzSoftwareEngineeringTest.class, args);
    }
}
