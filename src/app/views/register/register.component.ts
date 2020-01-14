import { Component, OnInit } from '@angular/core';    
import { LoginService } from '../../services/login.service';    
import {Register} from '../../models/register';   
import { FormBuilder, FormGroup, Validators } from '@angular/forms';    
@Component({    
  selector: 'app-register',    
  templateUrl: './register.component.html',    
  styleUrls: ['./register.component.scss']    
})    
export class RegisterComponent implements OnInit {    
  data = false;    
  UserForm: FormGroup;    
  massage:string;    
  constructor(private formbulider: FormBuilder,private loginService:LoginService) { }    
  ngOnInit() {    
    this.UserForm = this.formbulider.group({    
      UserName: ['', [Validators.required]],    
      LoginName: ['', [Validators.required]],    
      Password: ['', [Validators.required]],    
      Email: ['', [Validators.required]],    
      ContactNo: ['', [Validators.required]],    
      Address: ['', [Validators.required]],    
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.UserForm.value;    
    this.Createemployee(user);    
  }    
  Createemployee(register:Register)    
  {    
  this.loginService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.UserForm.reset();    
    });    
  }    
}