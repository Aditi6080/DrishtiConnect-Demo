package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
@EntityScan(basePackages = "com.app.Entity")
public class SpringMongoProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringMongoProjectApplication.class, args);
	}

}
