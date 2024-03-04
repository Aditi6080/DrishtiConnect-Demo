package com.app.Service;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Entity.Register;
import com.app.Repo.RegisterRepo;

@Service
public class RegisterServices {

    private static final Logger logger = LoggerFactory.getLogger(RegisterServices.class);

    private final RegisterRepo repo;

    @Autowired
    public RegisterServices(RegisterRepo repo) {
    	
        this.repo = repo;
    }

    public void save(Register registers) {
        repo.save(registers);
        logger.info("Saved register: {}", registers);
    }

    public Iterable<Register> listAll() {
        Iterable<Register> registers = repo.findAll();

        // Log each register
        registers.forEach(register -> logger.info("Retrieved register: {}", register));
        System.out.println("Registers from listall severvice"+registers);

        return registers;
    }
    
    public Iterable<Register> list() {
        Iterable<Register> registers = repo.findByEmailAndPassword("abc@gmail.com", "abc@123");

        return registers;
    }
    
  public boolean registerVolunteer(Register register) {
  // Check if the email is already registered
  if (repo.findByEmail(register.getEmail()).isPresent()) {
      return false; // Email already exists
  }

  // For simplicity, you may want to hash the password before saving it to the database
  // (use a password hashing library like BCryptPasswordEncoder in a real-world scenario)

  repo.save(register);
  return true;
  }

public Iterable<Register> loginVolunteer(String email, String password) {
  Iterable<Register> volunteerOptional = repo.findByEmailAndPassword(email, password);
  return volunteerOptional;
}
}




