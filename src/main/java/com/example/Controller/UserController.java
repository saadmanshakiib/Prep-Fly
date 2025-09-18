package com.example.Controller;
import com.example.Entity.User;
import com.example.Repository.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

@Autowired
    public Repo userRepo;
@GetMapping("/thikase")
public String check(){
    return "Ami thikasi";
}
//@PostMapping("/SignUp")
//    public ResponseEntity<String> signup(@RequestBody User user){
//
//    if(userRepo.existsByEmail(user.getEmail())){
//        return ResponseEntity.badRequest().body("Account Already Exists");
//    }
//    userRepo.save(user);
//    return ResponseEntity.ok("USER SAVED");
//}
@PostMapping("/SignUp")
public ResponseEntity<String> signup(@RequestBody User user){
    try {
        if(userRepo.existsByEmail(user.getEmail())){
            return ResponseEntity.badRequest().body("Account Already Exists");
        }
        userRepo.save(user);
        return ResponseEntity.ok("USER SAVED");
    }
    catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(500).body("Error creating account: " + e.getMessage());
    }
}
@GetMapping("/users")
    public ResponseEntity<?> getAllUsers(){
    return ResponseEntity.ok(userRepo.findAll());
}
}
//package com.example.Controller;
//
//import com.example.Entity.User;
//import com.example.Repository.Repo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin(origins = "http://localhost:5173") // No trailing slash is standard practice
//public class UserController {
//
//    @Autowired
//    public Repo userRepo;
//
//    @GetMapping("/check")
//    public String check() {
//        return "I am okay!";
//    }
//
//    @PostMapping("/SignUp")
//    public ResponseEntity<String> signup(@RequestBody User user) {
//        try {
//            // Check if the user already exists using the email
//            if (userRepo.existsByEmail(user.getEmail())) {
//                return ResponseEntity.status(HttpStatus.CONFLICT)
//                        .body("Account Already Exists. Please use a different email.");
//            }
//
//            // Save the new user to the database
//            userRepo.save(user);
//
//            // Return a success message
//            return ResponseEntity.status(HttpStatus.CREATED).body("User saved successfully!");
//
//        } catch (org.springframework.dao.DataIntegrityViolationException e) {
//            // Log the detailed exception on the server for debugging
//            e.printStackTrace();
//
//            // Return a specific error message to the client
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body("Error: Missing required fields or invalid data. " + e.getMostSpecificCause().getMessage());
//        } catch (Exception e) {
//            // Log any other unexpected errors
//            e.printStackTrace();
//
//            // Return a generic error message
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body("An unexpected server error occurred: " + e.getMessage());
//        }
//    }
//
//    @GetMapping("/users")
//    public ResponseEntity<?> getAllUsers() {
//        return ResponseEntity.ok(userRepo.findAll());
//    }
//}