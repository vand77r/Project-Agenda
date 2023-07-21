import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  
  name =''
  welcomeMessageFromService:string = ''
  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService){}
  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
  }

  getWelcomeMsg(){
    console.log(this.welcomeDataService.executeHelloWorldBeanService())
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      (error: any)=>this.handleErrorResponse(error))
  }

  getWelcomeMsgWithParam(){
    console.log(this.welcomeDataService.executeHelloWorldBeanServiceWithParam(this.name))
    this.welcomeDataService.executeHelloWorldBeanServiceWithParam(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      (error: any)=>this.handleErrorResponse(error))
  }
  handleErrorResponse(error: any) {
    console.log(error.error.message)
    this.welcomeMessageFromService=error.error.message
  }
  
  handleSuccessfulResponse(response : any){
    this.welcomeMessageFromService=response.message
    console.log(response.message)
  }
}
