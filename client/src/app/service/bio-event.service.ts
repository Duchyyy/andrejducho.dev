import { environment } from './../../environments/environment';
import { BioEvent } from './../model/bio-event.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BioEventService {
  private apiServerUrl = environment.apiBaseServerUrl;

  constructor(private http: HttpClient) { }

  public getBioEvents(): Observable<BioEvent[]> {
    return this.http.get<BioEvent[]>(`${this.apiServerUrl}/experience`);
  }

  public addBioEvent(bioEvent: BioEvent): Observable<BioEvent> {
    return this.http.post<BioEvent>(`${this.apiServerUrl}/admin/experience/add`,bioEvent);
  }

  public updateBioEvent(bioEvent: BioEvent): Observable<BioEvent> {
    return this.http.put<BioEvent>(`${this.apiServerUrl}/admin/experience/update`,bioEvent);
  }

  public deleteBioEvent(bioEventId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/admin/experience/delete/${bioEventId}`);
  }

}
