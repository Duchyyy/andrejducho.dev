package com.duchyyy.springboot.repositories;

import com.duchyyy.springboot.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository <Admin,Integer> {
    Optional<Admin> findAdminByEmail(String email);
}
