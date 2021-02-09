package com.duchyyy.springboot.controller;

import com.duchyyy.springboot.model.Profile;
import com.duchyyy.springboot.service.ProfileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
@RequestMapping("/admin/profile")
public class ProfileController {
    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public ResponseEntity<Profile> getProfileById() {
        Optional<Profile> profile = profileService.findProfileById(1);
        if (profile == null)
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        return new ResponseEntity(profile,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Profile> addProfile(@RequestBody Profile profile) {
        Optional<Profile> findProfile = profileService.findProfileById(1);
        if (findProfile != null)
            return new ResponseEntity<>(null, HttpStatus.NOT_ACCEPTABLE);

        Profile newProfile = profileService.addProfile(profile);
        return new ResponseEntity<>(newProfile, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Profile> updateProfile(@RequestBody Profile profile) {
        Profile updateProfile = profileService.updateProfile(profile);
        return new ResponseEntity<>(updateProfile, HttpStatus.OK);
    }

}
