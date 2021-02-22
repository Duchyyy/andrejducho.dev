import { AuthService } from './../auth/auth.service';
import { BioEventService } from './../service/bio-event.service';
import { BioEvent } from './../model/bio-event.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-experience',
  templateUrl: './bio-event.component.html',
  styleUrls: ['./bio-event.component.css']
})
export class BioEventComponent implements OnInit {
  public bioEvents: BioEvent[] = [];
  public oneBioEvent: BioEvent = {} as BioEvent;

  constructor(private bioEventService: BioEventService, public authService: AuthService) {   
   }

  ngOnInit(): void {
    this.getBioEvents();
  }

  public getBioEvents(): void {
    this.bioEventService.getBioEvents().subscribe(
      (response: BioEvent[]) => {
        this.bioEvents = response;
        console.log(this.bioEvents);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
  }

  public getBioEvent(id: number): void {
    this.getBioEvents();
    this.oneBioEvent = this.bioEvents[id];
  }

  public updateBioEvent(bioEvent: BioEvent): void {
    this.oneBioEvent = bioEvent;
    this.bioEventService.updateBioEvent(this.oneBioEvent).subscribe(
      (response: BioEvent) => {
        console.log(response);
        this.getBioEvents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);        
      }
    );
  }

  public addBioEvent(bioEvent: BioEvent): void {
    this.oneBioEvent = bioEvent;
    let lastId: number = this.bioEvents[this.bioEvents.length-1].id+1;    
    this.oneBioEvent.id = lastId;
    this.bioEventService.addBioEvent(this.oneBioEvent).subscribe(
      (response: BioEvent) => {
        console.log(response);
        this.getBioEvents();        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
  }
  
  public deleteBioEvent(bioEventId: number): void {
    this.bioEventService.deleteBioEvent(bioEventId).subscribe(
      (response: void) => {
        console.log(response);
        this.getBioEvents();        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public cleanOneBioEvent(): void {
    this.oneBioEvent.id = -1;
    this.oneBioEvent.event = ''; 
    this.oneBioEvent.eventDate = new Date();
  }


}
