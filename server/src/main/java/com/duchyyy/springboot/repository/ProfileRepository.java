package com.duchyyy.springboot.repository;

import com.duchyyy.springboot.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile,Integer> {
}
