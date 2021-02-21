package com.duchyyy.springboot.controller;

import com.duchyyy.springboot.model.BioEvent;
import com.duchyyy.springboot.service.BioEventService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/admin/experience")
public class BioEventController {
    private final BioEventService bioEventService;

    public BioEventController(BioEventService bioEventService) {
        this.bioEventService = bioEventService;
    }

    @GetMapping
    public ResponseEntity<List<BioEvent>> getBioEvents() {
        List<BioEvent> bioEvents = bioEventService.findAllBioEvents();
        return new ResponseEntity<>(bioEvents, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BioEvent> getBioEventById(@PathVariable("id") Integer id) {
        Optional<BioEvent> bioEvent = bioEventService.findBioEventById(id);
        return new ResponseEntity(bioEvent,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<BioEvent> addBioEvent(@RequestBody BioEvent bioEvent) {
        BioEvent newBioEvent = bioEventService.addBioEvent(bioEvent);
        return new ResponseEntity<>(newBioEvent, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<BioEvent> updateBioEvent(@RequestBody BioEvent bioEvent) {
        BioEvent updateBioEvent = bioEventService.updateBioEvent(bioEvent);
        return new ResponseEntity<>(updateBioEvent, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBioEvent(@PathVariable("id") Integer id) {
        bioEventService.deleteBioEvent(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
