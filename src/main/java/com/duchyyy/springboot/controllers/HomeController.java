package com.duchyyy.springboot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "welcome";
    }

    @GetMapping("/admin")
    public String admin() {
        return "welcome admin";
    }
    @GetMapping("/admin/log")
    public String adminLog() {
        return "welcome admin log";
    }
}
