import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password:string){
    console.log("before: "+this.isUserLoggerIn());
    if(username==='Vandana' && password==='dummy'){
      sessionStorage.setItem('authenticatedUser', username);
      console.log("after: "+this.isUserLoggerIn());
      return true;
    }
    return false;
  }

  isUserLoggerIn(){
    let user=sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
