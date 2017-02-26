import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './../register/register.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private regSer: RegisterService,
    private router : Router
  ) { 
    this.loginForm = this.formBuilder.group({
      email : [''],
      password : ['']


      
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.regSer.login(this.loginForm.value);

    if(this.regSer.isLoggedIn()) {
      this.router.navigate(['/contact']);
    }
  }
}
