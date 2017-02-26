import { RegisterService } from './register/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   title = 'app works!';
   isLoggedIn : boolean;

  constructor(private regSer : RegisterService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.regSer.isLoggedIn();

    this.regSer.event.subscribe(isLog => this.isLoggedIn = isLog);
  }
}
