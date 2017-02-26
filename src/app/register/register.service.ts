import { User } from './app.user';
import { Injectable, EventEmitter } from '@angular/core';

declare var firebase: any;

@Injectable()
export class RegisterService {

  event : EventEmitter<boolean>  = new EventEmitter<boolean>();
  
  createNewUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  login(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  isLoggedIn() {
    let user = firebase.auth().currentUser;
    let status = false;
    if (user) {
      // User is signed in.
      status = true;
      this.event.emit(true);
    } else {
      // No user is signed in.
      status = false;
      this.event.emit(false);
    }
    return status;
  }
}
