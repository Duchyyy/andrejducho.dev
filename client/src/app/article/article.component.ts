import { HttpErrorResponse } from '@angular/common/http';
import { ArticleService } from '../service/article.service';
import { Article } from '../model/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {    
    this.getArticles();
  }
  public getArticles(): void {
    this.articleService.getArticles().subscribe(
      (response: Article[]) => {
        this.articles = response;
        console.log(this.articles);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
  }

}
