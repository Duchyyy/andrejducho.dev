package com.duchyyy.springboot.service;

import com.duchyyy.springboot.model.Admin;
import com.duchyyy.springboot.repository.AdminRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {
    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Optional<Admin> findAdminById(Integer id) {
        return adminRepository.findById(id);
    }

    public Admin updateAdmin(Admin admin) {
        return  adminRepository.save(admin);
    }
}
