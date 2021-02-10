package com.duchyyy.springboot.controller;

import com.duchyyy.springboot.model.Article;
import com.duchyyy.springboot.model.BioEvent;
import com.duchyyy.springboot.model.Profile;
import com.duchyyy.springboot.model.Project;
import com.duchyyy.springboot.service.ArticleService;
import com.duchyyy.springboot.service.BioEventService;
import com.duchyyy.springboot.service.ProfileService;
import com.duchyyy.springboot.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HomeController {
    private final ProfileService profileService;
    private final BioEventService bioEventService;
    private final ProjectService projectService;
    private final ArticleService articleService;

    public HomeController(ProfileService profileService, BioEventService bioEventService, ProjectService projectService, ArticleService articleService) {
        this.profileService = profileService;
        this.bioEventService = bioEventService;
        this.projectService = projectService;
        this.articleService = articleService;
    }

    @GetMapping("/about")
    public ResponseEntity<Profile> getProfile() {
        Optional<Profile> profile = profileService.findProfileById(1);
        return new ResponseEntity(profile, HttpStatus.OK);
    }

    @GetMapping("/experience")
    public ResponseEntity<List<BioEvent>> getBioEvents() {
        List<BioEvent> bioEvents = bioEventService.findAllBioEvents();
        return new ResponseEntity<>(bioEvents, HttpStatus.OK);
    }
    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getProjects() {
        List<Project> projects = projectService.findAllProjects();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }
    @GetMapping("/articles")
    public ResponseEntity<List<Article>> getArticles() {
        List<Article> articles = articleService.findAllArticles();
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }



}
