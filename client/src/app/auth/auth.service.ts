import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService { 
  private apiServerUrl = environment.apiBaseServerUrl; 


  constructor(private http: HttpClient,
            public router: Router) { }


  public generateToken(request:any) {
    return this.http.post<string>(`${this.apiServerUrl}/login`, request, {  responseType: 'text' as 'json' });
  }


  public welcome(token:string) {
    let tokenStr = 'Bearer ' + token;
    localStorage.setItem('Authorization', tokenStr);
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<string>(`${this.apiServerUrl}`, {headers, responseType: 'text' as 'json' });
  }

  
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('Authorization');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('Authorization');
    if (removeToken == null) {
      this.router.navigate(['about']);
    }

  }
}