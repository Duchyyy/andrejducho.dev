package com.duchyyy.springboot.controller;

import com.duchyyy.springboot.model.BioEvent;
import com.duchyyy.springboot.model.Profile;
import com.duchyyy.springboot.service.BioEventService;
import com.duchyyy.springboot.service.ProfileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/")
public class HomeController {
    private final ProfileService profileService;
    private final BioEventService bioEventService;

    public HomeController(ProfileService profileService, BioEventService bioEventService) {
        this.profileService = profileService;
        this.bioEventService = bioEventService;
    }

//    @GetMapping
//    public ResponseEntity<Profile> getProfile() {
//        Optional<Profile> profile = profileService.findProfileById(1);
//        return new ResponseEntity(profile, HttpStatus.OK);
//    }
//
//    @GetMapping
//    public ResponseEntity<List<BioEvent>> getBioEvents() {
//        List<BioEvent> bioEvents = bioEventService.findAllBioEvents();
//        return new ResponseEntity<>(bioEvents, HttpStatus.OK);
//    }

    @GetMapping //(about)  a potom ina stranka kde bude projects a articles
    public ResponseEntity<HashMap> getMap() {
        return new ResponseEntity<>(getProfileAndBioEvents(), HttpStatus.OK);
    }

    public HashMap<Optional<Profile>,List<BioEvent>> getProfileAndBioEvents() {
        HashMap<Optional<Profile>, List<BioEvent>> map = new HashMap<>();
        Optional<Profile> profile = profileService.findProfileById(1);
        List<BioEvent> bioEvents = bioEventService.findAllBioEvents();
        map.put(profile,bioEvents);
        return map;
    }

//    @GetMapping("/admin")
//    public String admin() {
//        return "welcome admin";
//    }
//    @GetMapping("/admin/log")
//    public String adminLog() {
//        return "welcome admin log";
//    }


}
