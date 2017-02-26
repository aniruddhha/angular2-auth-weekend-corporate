import { RegisterService } from './../register/register.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private router : Router,
    private regSer: RegisterService
  ) {
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.regSer.isLoggedIn()) {
      return this.regSer.isLoggedIn();
    }
    this.router.navigate(['']);
    return false;
  }
}
