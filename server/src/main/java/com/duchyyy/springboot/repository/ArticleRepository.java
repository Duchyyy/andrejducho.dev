package com.duchyyy.springboot.repository;

import com.duchyyy.springboot.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article,Integer> {
}
