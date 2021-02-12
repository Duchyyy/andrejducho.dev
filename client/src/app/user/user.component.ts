import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: User = {} as User;

  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.userService.getUser().subscribe(
      (response: User) => {
        this.user = response;
        console.log(this.user);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
  }

}
