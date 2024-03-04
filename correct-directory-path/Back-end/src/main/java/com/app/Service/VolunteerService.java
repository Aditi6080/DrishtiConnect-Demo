//package com.app.Service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.app.Entity.Register;
//import com.app.Repo.VolunteerRepo;
//
//
//@Service
//public class VolunteerService {
//	 @Autowired
//	    private VolunteerRepo repo;
//
//	    @SuppressWarnings("null")
//	    public Register saveVolunteer(Register volunteer) {
//	        return repo.save(volunteer);
//	    }
//
//	    @SuppressWarnings("null")
//	    public List<Register> saveVolunteers(List<Register> voList) {
//	        return repo.saveAll(voList);
//	    }
//
//	    public List<Register> getVolunteer() {
//	        return repo.findAll();
//	    }
//
//	    public Register getVolunteerById(int id) {
//	        return repo.findById(id).orElse(null);
//	    }
//
//	    public String deleteVolunteer(int id) {
//	        repo.deleteById(id);
//	        return "Volunteer Removed!!!" + id;
//	    }
//
//	    public Register updateVolunteer(Register volunteer) {
//	    	Register existingVolunteer = repo.findById(volunteer.getId()).orElse(null);
//	        existingVolunteer.setFull_Name(volunteer.getFull_Name());
//	        existingVolunteer.setEmail(volunteer.getEmail());
//	        existingVolunteer.setPassword(volunteer.getPassword());
//	        existingVolunteer.setAddress(volunteer.getAddress());
//	        existingVolunteer.setCity(volunteer.getCity());
//	        existingVolunteer.setState(volunteer.getState());
//	        existingVolunteer.setCountry(volunteer.getCountry());
//	        existingVolunteer.setZip(volunteer.getZip());
//	        return repo.save(existingVolunteer);
//	    }
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
//
//
//
////package com.drishti.drishticonnect.Service;
////
////import java.util.List;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.stereotype.Service;
////
////import com.drishti.drishticonnect.Entity.Volunteer;
////import com.drishti.drishticonnect.repository.VolunteerRepo;
////
////@Service
////public class VolunteerService {
////    @Autowired
////    private VolunteerRepo repo;
////
////    @SuppressWarnings("null")
////    public Volunteer saveVolunteer(Volunteer volunteer) {
////        return repo.save(volunteer);
////    }
////
////    @SuppressWarnings("null")
////    public List<Volunteer> saveVolunteers(List<Volunteer> voList) {
////        return repo.saveAll(voList);
////    }
////
////    public List<Volunteer> getVolunteer() {
////        return repo.findAll();
////    }
////
////    public Volunteer getVolunteerById(int id) {
////        return repo.findById(id).orElse(null);
////    }
////
////    public String deleteVolunteer(int id) {
////        repo.deleteById(id);
////        return "Volunteer Removed!!!" + id;
////    }
////
////    public Volunteer updateVolunteer(Volunteer volunteer) {
////        Volunteer existingVolunteer = repo.findById(volunteer.getId()).orElse(null);
////        existingVolunteer.setFirstName(volunteer.getFirstName());
////        existingVolunteer.setLastName(volunteer.getLastName());
////        existingVolunteer.setAge(volunteer.getAge());
////        existingVolunteer.setBirthday(volunteer.getBirthday());
////        existingVolunteer.setEmailId(volunteer.getEmailId());
////        existingVolunteer.setCountryCode(volunteer.getCountryCode());
////        existingVolunteer.setPhoneNumber(volunteer.getPhoneNumber());
////        existingVolunteer.setGender(volunteer.getGender());
////        existingVolunteer.setAddress(volunteer.getAddress());
////        existingVolunteer.setCity(volunteer.getCity());
////        existingVolunteer.setCountry(volunteer.getCountry());
////        existingVolunteer.setPinCode(volunteer.getPinCode());
////        return repo.save(existingVolunteer);
////    }
////}
////
