import { Observable } from 'rxjs';
import { Article } from './../model/article.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiServerUrl = environment.apiBaseServerUrl;

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiServerUrl}/articles`);
  }

  public addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.apiServerUrl}/admin/articles/add`,article);
  }

  public updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiServerUrl}/admin/articles/update`,article);
  }

  public deleteArticle(articleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/admin/articles/delete/${articleId}`);
  }
}
