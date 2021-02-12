import { User } from '../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseServerUrl;

  constructor(private http: HttpClient) { }

  public getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/admin/account`);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/admin/account/update`,user);
  }
}
