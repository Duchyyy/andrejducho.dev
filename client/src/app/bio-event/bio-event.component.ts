import { BioEvent } from './../model/bio-event.model';
import { BioEventService } from './../service/bio-event.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-experience',
  templateUrl: './bio-event.component.html',
  styleUrls: ['./bio-event.component.css']
})
export class BioEventComponent implements OnInit {
  public bioEvents: BioEvent[] = [];

  constructor(private bioEventService: BioEventService) {
    //this.bioEvents = [];
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


}
