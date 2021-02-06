package com.duchyyy.springboot.repository;

import com.duchyyy.springboot.model.Biography;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BiographyRepository extends JpaRepository<Biography,Integer> {
}
