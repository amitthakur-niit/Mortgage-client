import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { LogIn } from '../Models/logIn';
import { Question } from '../Models/question';
import { Register } from '../Models/register';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthclientService {

  private url = 'http://localhost:8765/';
  constructor(private http: HttpClient, private router: Router) { }
 status:Boolean=false;
  //user-logIn service
  logInData (requestBody: LogIn): Observable<BigInteger> {
    console.log("Login check");
    return new Observable();
   // return this.http.post<BigInteger>(this.url + 'user-registration-service/users/logIn', requestBody)
  }
  
  //forgot-password
  forgotPaswd(requestBody:Question):Observable<any>{

    return this.http.post<any>(this.url + 'user-registration-service/users/forgetPassword', requestBody)
  }
  
  registerData (requestBody: Register): Observable<any> {
    return this.http.post<any>(this.url + 'user-registration-service/users/register', requestBody)
  }

   

  checkAccess():BehaviorSubject<Boolean>{
   let  userStatus:BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
   userStatus.next(localStorage.getItem('currentUser') ? true:false);
   
  console.log("userStatus :",userStatus);
   return userStatus;
  }

  loclStorageValue(){
    let userStatus = {
      userId: 1,
      email:"random"
    }
    localStorage.setItem("currentUser", JSON.stringify(userStatus));
  }

  //

  

  logout(){
   localStorage.removeItem("currentUser");
  }


}

//STEPS TO FOLLOW

//step1: hit API to check login details and then set local storage
//step2: create a BS object and write logc to set status accordingly
//step3:  use that in required component  
