package com.duchyyy.springboot.service;

import com.duchyyy.springboot.model.Profile;
import com.duchyyy.springboot.repository.ProfileRepository;
import com.duchyyy.springboot.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
@Transactional
public class ProfileService {
    private final ProfileRepository profileRepository;
    private final UserRepository userRepository;

    public ProfileService(ProfileRepository profileRepository, UserRepository userRepository) {
        this.profileRepository = profileRepository;
        this.userRepository = userRepository;
    }

    public Profile addProfile(Profile profile) {
        profile.setUser(userRepository.getOne(1));
        return profileRepository.save(profile);
    }
    public Optional<Profile> findProfileById(Integer id) {
        return profileRepository.findById(id);
    }

    public Profile updateProfile(Profile profile) {
        profile.setUser(userRepository.getOne(1));
        return  profileRepository.save(profile);
    }

}
