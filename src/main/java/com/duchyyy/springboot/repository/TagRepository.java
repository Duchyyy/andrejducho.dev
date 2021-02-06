package com.duchyyy.springboot.repository;

import com.duchyyy.springboot.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag,Integer> {
}
