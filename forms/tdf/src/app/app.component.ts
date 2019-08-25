import { Component } from '@angular/core';
import {User} from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topicHasError= true;
  submitted = false;
  errorMsg="";

  validateTopic(value){
    if(value == "default"){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
    
  }
  constructor(private _enrollmentService:EnrollmentService){

  }
  onSubmit(){
    // console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe(
      data=>console.log('Success!',data),
      //error=>console.error('Error!',error)
      error=>this.errorMsg=error.statusText
    )
    this.submitted=true;
  }
  topics = ['Angular','React','Vue'];
  userModel=new User('Rob','rob@gmail.com',5545452122,'','morning',true);
}
