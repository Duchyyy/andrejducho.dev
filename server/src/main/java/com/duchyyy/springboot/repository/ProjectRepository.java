package com.duchyyy.springboot.repository;

import com.duchyyy.springboot.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project,Integer> {
}
