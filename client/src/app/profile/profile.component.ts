import { ProfileService } from './../service/profile.service';
import { Profile } from './../model/profile.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile: Profile = {} as Profile;

  constructor(private profileService: ProfileService) {  
   // this.profile = {} as Profile;
  }

  ngOnInit(): void {
    this.getProfile();
  }

  public getProfile(): void {
    this.profileService.getProfile().subscribe(
      (response: Profile) => {
        this.profile = response;
        console.log(this.profile);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
  }

}
