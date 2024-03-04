package com.app.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.Entity.Register;
import com.app.Repo.RegisterRepo;
import com.app.Service.RegisterServices;

@RestController
@RequestMapping("/login")
public class LoginController {

//    @Autowired
//    private RegisterRepo registerRepo;
	@Autowired
	private RegisterServices registerService;

    @GetMapping("/get")
    public ResponseEntity<Iterable<Register>> getAllRegisters() {
        try {
            Iterable<Register> registers = registerService.list();
            return new ResponseEntity<>(registers, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/log_in")
    public ResponseEntity<String> login(@RequestParam("email") String email, @RequestParam("password") String password) {
        Iterable<Register> volunteer = registerService.loginVolunteer(email, password);

        if (volunteer != null) {
            return new ResponseEntity<>("Successfully logged in", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
        }
  }
  
//@PostMapping(value="/save")
//public ResponseEntity<String> saveRegister(@RequestBody Register registers) {
//    registerServices.save(registers);
//    return new ResponseEntity<>(String.valueOf(registers.getId()), HttpStatus.CREATED);
//}

}





















