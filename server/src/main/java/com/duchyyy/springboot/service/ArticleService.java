package com.duchyyy.springboot.service;

import com.duchyyy.springboot.model.Article;
import com.duchyyy.springboot.repository.ArticleRepository;
import com.duchyyy.springboot.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    public ArticleService(ArticleRepository articleRepository, UserRepository userRepository) {
        this.articleRepository = articleRepository;
        this.userRepository = userRepository;
    }
    public Article addArticle(Article article) {
        article.setUser(userRepository.getOne(1));
        return articleRepository.save(article);
    }

    public List<Article> findAllArticles() {
        return articleRepository.findAll();
    }
    public Optional<Article> findArticleById(Integer id) {
        return articleRepository.findById(id);
    }

    public Article updateArticle(Article article) {
        article.setUser(userRepository.getOne(1));
        return articleRepository.save(article);
    }

    public void deleteArticle(Integer id) {
        articleRepository.deleteById(id);
    }
}
