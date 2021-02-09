package com.duchyyy.springboot.repository;

import com.duchyyy.springboot.model.BioEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BioEventRepository extends JpaRepository<BioEvent,Integer> {
}
