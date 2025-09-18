package com.example.Entity;


import jakarta.persistence.*;

@Entity
@Table(name = "USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

@Column(nullable = false)
    private String name;
@Column(unique = true , nullable = false)
    private String email;
@Column(nullable = false)
    private String password;

    public void setId(long id){
        this.id = id;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public void setEmail(String email){
        this.email = email;
    }

    public String getEmail(){return this.email;}
    public String getPassword(){return this.password;}
    public String getName(){return  this.name;}
    public long getId(){return this.id;}
}

