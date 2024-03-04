//package com.app.Controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.app.Entity.Register;
//import com.app.Service.VolunteerService;
//
//
//@RestController
//@RequestMapping("/api/volunteers") // Set a base path for your endpoints
//@CrossOrigin(origins = "*") // Allow requests from any origin, adjust as needed
//public class VolunteerController {
//	
//	@Autowired
//    private VolunteerService service;
//
//
//    @PostMapping("/addVolunteer")
//    public Register addVolunteer(@RequestBody Register volunteer) {
//        return service.saveVolunteer(volunteer);
//    }
//
//    @PostMapping("/addVolunteers")
//    public List<Register> addVolunteers(@RequestBody List<Register> volunteerList) {
//        return service.saveVolunteers(volunteerList);
//    }
//
//    @GetMapping("/volunteers")
//    public List<Register> showAllVolunteers() {
//        return service.getVolunteer();
//    }
//
//    @GetMapping("/{id}")
//    public Register findVolunteerById(@PathVariable int id) {
//        return service.getVolunteerById(id);
//    }
//
////    @PutMapping("/update")
////    public Register updateVolunteer(@RequestBody Register volunteer) {
////        return service.updateVolunteer(volunteer);
////    }
////
////    @DeleteMapping("/delete/{id}")
////    public String deleteVolunteer(@PathVariable int id) {
////        return service.deleteVolunteer(id);
////    }
//
//}
//
//
//
//
//
//
//
//
//
////package com.drishti.drishticonnect.Controller;
////
////import java.util.List;
////import org.springframework.beans.factory.annotation.Autowired;
////
////import org.springframework.web.bind.annotation.*;
////import com.drishti.drishticonnect.Entity.Volunteer;
////import com.drishti.drishticonnect.Service.VolunteerService;
////
////@RestController
////@RequestMapping("/api/volunteers") // Set a base path for your endpoints
////@CrossOrigin(origins = "*") // Allow requests from any origin, adjust as needed
////public class VolunteerController {
////
////    @Autowired
////    private VolunteerService service;
////
////
////    @PostMapping("/addVolunteer")
////    public Volunteer addVolunteer(@RequestBody Volunteer volunteer) {
////        return service.saveVolunteer(volunteer);
////    }
////
////    @PostMapping("/addVolunteers")
////    public List<Volunteer> addVolunteers(@RequestBody List<Volunteer> volunteerList) {
////        return service.saveVolunteers(volunteerList);
////    }
////
////    @GetMapping("/volunteers")
////    public List<Volunteer> showAllVolunteers() {
////        return service.getVolunteer();
////    }
////
////    @GetMapping("/{id}")
////    public Volunteer findVolunteerById(@PathVariable int id) {
////        return service.getVolunteerById(id);
////    }
////
////    @PutMapping("/update")
////    public Volunteer updateVolunteer(@RequestBody Volunteer volunteer) {
////        return service.updateVolunteer(volunteer);
////    }
////
////    @DeleteMapping("/delete/{id}")
////    public String deleteVolunteer(@PathVariable int id) {
////        return service.deleteVolunteer(id);
////    }
////}
////
