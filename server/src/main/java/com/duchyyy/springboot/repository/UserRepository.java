package com.duchyyy.springboot.repository;

import com.duchyyy.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Integer> {
    User findByUsername(String userName);

}
