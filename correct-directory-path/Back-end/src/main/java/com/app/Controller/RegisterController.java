package com.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.app.Entity.Register;
import com.app.Service.RegisterServices;


@RestController
//@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private RegisterServices registerServices;

    @PostMapping(value="/save")
    public ResponseEntity<String> saveRegister(@RequestBody Register registers) {
        registerServices.save(registers);
        System.out.println(registers.toString());
        
        return new ResponseEntity<>(String.valueOf(registers.getId()), HttpStatus.CREATED);
    }

        @GetMapping(value="/getAll")
        public ResponseEntity<Iterable<Register>> getRegister() {
            Iterable<Register> registers;
            try {
                registers = registerServices.listAll();
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return new ResponseEntity<>(registers, HttpStatus.OK);
        }
    }





//package com.projecttask.projecttask.Controller;
//
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//
//import com.projecttask.projecttask.Model.UserSignup;
//import com.projecttask.projecttask.Repository.UserSignup_Repo;
//
//
//
//@Controller
//public class SignupController {
//
//    @Autowired
//    private UserSignup_Repo userRepo;
//    
//    @GetMapping("/signup")
//    public String signup(){
//
//        return "signup";
//    }
//
//    @PostMapping("/signup")
//    public String signupDetails(UserSignup user){
//        userRepo.save(user);
//        return "welcome";
//    }
//}
//

