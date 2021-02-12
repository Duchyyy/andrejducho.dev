package com.duchyyy.springboot.service;

import com.duchyyy.springboot.model.BioEvent;
import com.duchyyy.springboot.repository.BioEventRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BioEventService {

    private final BioEventRepository bioEventRepository;

    public BioEventService(BioEventRepository bioEventRepository) {
        this.bioEventRepository = bioEventRepository;
    }

    public BioEvent addBioEvent(BioEvent bioEvent) {
        return bioEventRepository.save(bioEvent);
    }
    public Optional<BioEvent> findBioEventById(Integer id) {
        return bioEventRepository.findById(id);
    }
    public List<BioEvent> findAllBioEvents() {
        return bioEventRepository.findAll();
    }

    public BioEvent updateBioEvent(BioEvent bioEvent) {
        return  bioEventRepository.save(bioEvent);
    }
    public void deleteBioEvent(Integer id){
        bioEventRepository.deleteById(id);
    }
}
