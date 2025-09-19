package com.example.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Profile {
    private String userName;
    private String gender;
    private String area;
    private String age;
        private String profilePicPath;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public void setProfilePicPath(String profilePicPath) {
        this.profilePicPath = profilePicPath;
    }

    public String getUserName(){return this.userName;}
    public String getGender(){return this.gender;}
    public String getArea(){return this.area;}
    public String getProfilePicPath(){return this.profilePicPath;}
    public String getAge(){return this.age;}
}
