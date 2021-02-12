package com.duchyyy.springboot.service;

import com.duchyyy.springboot.model.User;
import com.duchyyy.springboot.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> findUserById(Integer id) {
        return userRepository.findById(id);
    }

    public User updateUser(User user) {
        return  userRepository.save(user);
    }
}
