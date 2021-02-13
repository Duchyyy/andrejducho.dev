package com.duchyyy.springboot.repository;

import com.duchyyy.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository <User,Integer> {
    //User findByUsername(String userName);
    Optional<User> findByUsername(String username);

}
