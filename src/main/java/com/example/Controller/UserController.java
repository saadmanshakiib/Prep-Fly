package com.example.Controller;
import com.example.Entity.Profile;
import com.example.Entity.User;
import com.example.Repository.ProfileRepository;
import com.example.Repository.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Path;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UserController {

    @Autowired
    public Repo userRepo;
    @Autowired
    public ProfileRepository profileRepo;

    @GetMapping("/thikase")

    public String check() {
        return "Ami thikasi";
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        try {

            System.out.println("Email :" + user.getEmail());
            if (userRepo.existsByEmail(user.getEmail())) {
                return ResponseEntity.badRequest().body("Account Already Exists");
            }

            userRepo.save(user);
            return ResponseEntity.ok("USER SAVED");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error creating account: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {

        User hasAccount = userRepo.findByEmail(user.getEmail());
        if (hasAccount == null) {
            return ResponseEntity.badRequest().body("No User Found");
        }
        if (!hasAccount.getPassword().equals(user.getPassword())) {
            return ResponseEntity.badRequest().body("Incorrect Password");
        }
        return ResponseEntity.ok("Login Successfull");

    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userRepo.findAll());
    }



    @PostMapping("/profile")
    public ResponseEntity<String> setProfile(
            @RequestParam("dp") MultipartFile file,
            @RequestParam("userName") String userName,
            @RequestParam("age") String age,
            @RequestParam("gender") String gender,
            @RequestParam("area") String area
    ) throws IOException{

        try {
            Path uploadDir = Paths.get(System.getProperty("user.dir"), "uploads");
            if (!Files.exists(uploadDir)) Files.createDirectories(uploadDir);

            File destFile = uploadDir.resolve(file.getOriginalFilename()).toFile();
            file.transferTo(destFile);

            Profile profile = new Profile();
            profile.setUserName(userName);
            profile.setAge(age);
            profile.setGender(gender);
            profile.setArea(area);
            profile.setProfilePicPath(destFile.getAbsolutePath());

            profileRepo.save(profile);

            return ResponseEntity.ok("Profile saved successfully!");
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error Occurred While Saving Profile: " + e.getMessage());
        }
    }

    @GetMapping("/profileinfo")
    public ResponseEntity<?> getProfileInfo(){
        return ResponseEntity.ok(profileRepo.findAll());
    }

    @GetMapping("/profile/{userName}/pic")
    public ResponseEntity<?> getProfilePic(@PathVariable String userName){
            return profileRepo.findByUserName(userName).map(
                    profile -> {
                        try{
            Path path = Paths.get(profile.getProfilePicPath());
            byte[] img = Files.readAllBytes(path);
            return ResponseEntity.ok()
                    .header("Content-Type",Files.probeContentType(path))
                    .body(img);
                        }
                        catch (Exception e){
                        return ResponseEntity.status(500).build();
                        }
                    }).orElse(ResponseEntity.notFound().build());

    }
}
