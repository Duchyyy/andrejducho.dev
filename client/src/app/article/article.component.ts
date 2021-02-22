import { AuthService } from './../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ArticleService } from '../service/article.service';
import { Article } from '../model/article.model';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public articles: Article[] = [];
  public oneArticle : Article = {} as Article;

  constructor(private articleService: ArticleService, public authService: AuthService) { }

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

  public getArticle(id: number): void {
    this.getArticles();
    this.oneArticle = this.articles[id];
  }

  public updateArticle(article: Article): void {
    this.oneArticle = article;
    this.articleService.updateArticle(this.oneArticle).subscribe(
      (response: Article) => {
        console.log(response);
        this.getArticles();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);        
      }
    );
  }

  public addArticle(article: Article): void {
    this.oneArticle = article;
    let lastId: number = this.articles[this.articles.length-1].id+1;    
    this.oneArticle.id = lastId;
    this.articleService.addArticle(this.oneArticle).subscribe(
      (response: Article) => {
        console.log(response);
        this.getArticles();        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
  }
  
  public deleteArticle(articleId: number): void {
    this.articleService.deleteArticle(articleId).subscribe(
      (response: void) => {
        console.log(response);
        this.getArticles();        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public cleanOneArticle(): void {
    this.oneArticle.id = -1;
    this.oneArticle.title = '';
    this.oneArticle.description = '';    
    this.oneArticle.createdDate = new Date();
    this.oneArticle.content = '';
  }

}
