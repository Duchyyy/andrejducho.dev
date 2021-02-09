package com.duchyyy.springboot.controller;

import com.duchyyy.springboot.model.Admin;
import com.duchyyy.springboot.service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/admin/account")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public ResponseEntity<Admin> getAdminById() {
        Optional<Admin> admin = adminService.findAdminById(1);
        if (admin == null)
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        return new ResponseEntity(admin,HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Admin> updateAdmin(@RequestBody Admin admin) {
        Admin updateAdmin = adminService.updateAdmin(admin);
        return new ResponseEntity<>(updateAdmin, HttpStatus.OK);
    }
}
