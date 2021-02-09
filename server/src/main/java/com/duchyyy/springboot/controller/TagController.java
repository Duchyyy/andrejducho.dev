package com.duchyyy.springboot.controller;

import com.duchyyy.springboot.model.Tag;
import com.duchyyy.springboot.service.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin/tags")
public class TagController {
    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }
    @GetMapping
    public ResponseEntity<List<Tag>> getTags() {
        List<Tag> tags = tagService.findAllTags();
        return new ResponseEntity<>(tags, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tag> getTagById(@PathVariable("id") Integer id) {
        Optional<Tag> tag = tagService.findTagById(id);
        return new ResponseEntity(tag,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Tag> addTag(@RequestBody Tag tag) {
        Tag newTag = tagService.addTag(tag);
        return new ResponseEntity<>(newTag, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Tag> updateTag(@RequestBody Tag tag) {
        Tag updateTag = tagService.updateTag(tag);
        return new ResponseEntity<>(updateTag, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTag(@PathVariable("id") Integer id) {
        tagService.deleteTag(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
