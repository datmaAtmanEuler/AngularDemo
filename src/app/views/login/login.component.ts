import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from '../../services/login.service';    
@Component({    
  selector: 'app-login',    
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.scss']    
})    
export class LoginComponent implements OnInit {    
  model : any={};    
  errorMessage:string;    
  constructor(private router:Router,private LoginService: LoginService) { }    
  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  }    
  login(){      
    this.LoginService.Login(this.model).subscribe(    
      data => {     
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/Dashboard']);    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    
 }