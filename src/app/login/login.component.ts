import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username = "Vandana"
  password=''
  invalidLogin=false
  
  constructor(private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService){

  }
  ngOnInit() {
    
  }

  handleLogin(){
    console.log(this.username)

    if(this.hardcodedAuthentication.authenticate(this.username, this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
    console.log("invalidLogin"+this.invalidLogin)
  }

}
