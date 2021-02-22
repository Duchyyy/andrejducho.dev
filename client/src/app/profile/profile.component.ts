import { AuthService } from './../auth/auth.service';
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

  constructor(private profileService: ProfileService, public authService: AuthService) { }

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

  public updateProfile(profile: Profile): void {
    this.profile = profile;
    this.profileService.updateProfile(this.profile).subscribe(
      (response: Profile) => {
        console.log(response);
        this.getProfile();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);        
      }
    );
  }

  /*public addProfile(profile: Profile): void {
    this.profile = profile;
    let lastId: number = 1;    
    this.profile.id = lastId;
    this.profileService.addProfile(this.profile).subscribe(
      (response: Profile) => {
        console.log(response);
        this.getProfile();        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
  }*/

}
