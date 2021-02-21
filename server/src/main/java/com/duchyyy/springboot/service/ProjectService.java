package com.duchyyy.springboot.service;

import com.duchyyy.springboot.model.Project;
import com.duchyyy.springboot.repository.ProjectRepository;
import com.duchyyy.springboot.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public ProjectService(ProjectRepository projectRepository, UserRepository userRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }

    public Project addProject(Project project) {
        project.setUser(userRepository.getOne(1));
        return projectRepository.save(project);
    }

    public List<Project> findAllProjects() {
        return projectRepository.findAll();
    }
    public Optional<Project> findProjectById(Integer id) {
        return projectRepository.findById(id);
    }

    public Project updateProject(Project project) {
        project.setUser(userRepository.getOne(1));
        return projectRepository.save(project);
    }

    public void deleteProject(Integer id) {
        projectRepository.deleteById(id);
    }
}
