import { Admin } from './../model/admin.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiServerUrl = environment.apiBaseServerUrl;

  constructor(private http: HttpClient) { }

  public getAdmin(): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiServerUrl}/admin/account`);
  }

  public updateAdmin(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.apiServerUrl}/admin/account/update`,admin);
  }
}
