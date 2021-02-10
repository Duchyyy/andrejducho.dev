import { AdminService } from './../service/admin.service';
import { Admin } from './../model/admin.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public admin: Admin = {} as Admin;

  constructor(private adminService: AdminService) {
    //this.admin = {} as Admin;
   }

  ngOnInit(): void {
    this.getAdmin();
  }

  public getAdmin(): void {
    this.adminService.getAdmin().subscribe(
      (response: Admin) => {
        this.admin = response;
        console.log(this.admin);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );    
  }

}
