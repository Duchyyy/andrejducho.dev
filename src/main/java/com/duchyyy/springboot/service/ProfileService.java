package com.duchyyy.springboot.service;

import com.duchyyy.springboot.model.Profile;
import com.duchyyy.springboot.repository.ProfileRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProfileService {
    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public Profile addProfile(Profile profile) {
        return profileRepository.save(profile);
    }
    public Optional<Profile> findProfileById(Integer id) {
        return profileRepository.findById(id);
    }

    public Profile updateProfile(Profile profile) {
        return  profileRepository.save(profile);
    }

}
