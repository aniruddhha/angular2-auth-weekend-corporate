import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registerServive : RegisterService
  ) {
    this.registerForm = this.formBuilder.group({
      userName : [],
      email :[],
      password: []      
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.registerServive.createNewUser(this.registerForm.value);
    console.log(this.registerForm.value);
  }
}
