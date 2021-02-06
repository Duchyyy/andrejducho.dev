package com.duchyyy.springboot.repository;

import com.duchyyy.springboot.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository <Admin,Integer> {
    //Optional<Admin> findAdminByEmail(String email);
}
