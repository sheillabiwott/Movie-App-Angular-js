import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email:string, password:string){
    // here we will call our backend api but as we are not making a real prodcut we will just 
    // login user here
    // suppose we have successfully logged in and got a token from the server
    // we will store the token in localstorage if available
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("token", Math.random() + "");
    } else {
      console.error("localStorage is not available. Unable to store token.");
    }
  }

  get isLoggedIn() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
