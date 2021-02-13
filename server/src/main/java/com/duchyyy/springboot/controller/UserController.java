package com.duchyyy.springboot.controller;

import com.duchyyy.springboot.model.User;
import com.duchyyy.springboot.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin
public class UserController {
    private final UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/admin/account")
    public ResponseEntity<User> getUserById() {
        Optional<User> user = userService.findUserById(1);
        if (user == null)
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        return new ResponseEntity(user,HttpStatus.OK);
    }

    @PutMapping("/admin/account/update")
    public ResponseEntity<User> updateAdmin(@RequestBody User user) {
        User updateUser = userService.updateUser(user);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }
}
