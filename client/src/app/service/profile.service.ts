import { Profile } from './../model/profile.model';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiServerUrl = environment.apiBaseServerUrl;

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiServerUrl}/about`);
  }

  public addProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`${this.apiServerUrl}/admin/profile/add`,profile);
  }

  public updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiServerUrl}/admin/profile/update`,profile);
  }

  
}
