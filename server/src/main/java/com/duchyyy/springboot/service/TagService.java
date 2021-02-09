package com.duchyyy.springboot.service;

import com.duchyyy.springboot.model.Article;
import com.duchyyy.springboot.model.Tag;
import com.duchyyy.springboot.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }
    public Tag addTag(Tag tag) {
        return tagRepository.save(tag);
    }

    public List<Tag> findAllTags() {
        return tagRepository.findAll();
    }
    public Optional<Tag> findTagById(Integer id) {
        return tagRepository.findById(id);
    }

    public Tag updateTag(Tag tag) {
        return tagRepository.save(tag);
    }

    public void deleteTag(Integer id) {
        tagRepository.deleteById(id);
    }
}
