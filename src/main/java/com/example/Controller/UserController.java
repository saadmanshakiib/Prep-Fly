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
@PostMapping("/signup")
public ResponseEntity<String> signup(@RequestBody User user){
    try{

        System.out.println("Email :"+ user.getEmail());
        if(userRepo.existsByEmail(user.getEmail())){
            return ResponseEntity.badRequest().body("Account Already Exists");
        }

        userRepo.save(user);
        return ResponseEntity.ok("USER SAVED");
    }
    catch(Exception e){
        e.printStackTrace();
        return ResponseEntity.status(500).body("Error creating account: " + e.getMessage());
    }
}
@PostMapping("/login")
public ResponseEntity<String> login(@RequestBody User user){
    
    User hasAccount = userRepo.findByEmail(user.getEmail());
    if(hasAccount == null){
        return ResponseEntity.badRequest().body("No User Found");
    }
    if(!hasAccount.getPassword().equals(user.getPassword())) {
        return ResponseEntity.badRequest().body("Incorrect Password");
    }
        return ResponseEntity.ok("Login Successfull");

}
@GetMapping("/users")
    public ResponseEntity<?> getAllUsers(){
    return ResponseEntity.ok(userRepo.findAll());
}
}