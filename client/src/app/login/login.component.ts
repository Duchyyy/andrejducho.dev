import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;

  authRequest:any={
    "userName":"javatechie",
    "password":"password" };

  response:any;


  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      userName: [''],
      password: ['']
    })
  }
  ngOnInit() {
    //this.getAccessToken(this.authRequest);
   }

  loginUser() {
    this.getAccessToken(this.signinForm.value);

  }
  public getAccessToken(authRequest:any){
    let resp=this.authService.generateToken(authRequest);

    //resp.subscribe(data=>console.log(data));
    resp.subscribe(data=>this.accessApi(data));
  }
    
    
  public accessApi(token:any){
    let resp=this.authService.welcome(token);
    resp.subscribe(data=>this.response=data);
  }
}