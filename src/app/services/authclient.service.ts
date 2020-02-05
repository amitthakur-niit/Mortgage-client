import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { LogIn } from '../Models/logIn';
import { Question } from '../Models/question';
import { Register } from '../Models/register';
import { Router } from '@angular/router';
import { Forget } from '../auth/forgot-pasword/forgetPassword';
import { Reset } from '../auth/reset-passowrd/resetPassword';
import { PaymentDetails } from '../Models/PaymentDetails';
import { stringify } from 'querystring';
import { NotificationService } from './notification.service';
import { LoginResponse } from '../Models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthclientService {

  private url = 'http://localhost:8765/';
  public subject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  
  constructor(private http: HttpClient, private router: Router, private notify:NotificationService) { }

  //user-logIn service
  logInData (requestBody: LogIn):Observable<LoginResponse> {
  //const login:LoginResponse;
  return this.http.post<LoginResponse>(this.url + 'user-registration-service/users/logIn', requestBody)
    
    }
  
  //forgot-password
  forgotPaswd(requestBody:Question):Observable<any>{

    return this.http.post<any>(this.url + 'user-registration-service/users/forgetPassword', requestBody)
  }
  
  registerData (requestBody: Register): Observable<any> {
    return this.http.post<any>(this.url + 'user-registration-service/users/register', requestBody)
  }

  forgotPaswd2(requestBody:Forget):Observable<any>{

    return this.http.post<any>(this.url + 'user-registration-service/users/forgetPassword/reset', requestBody)
  }

  resetPass(requestBody:Reset):Observable<any>{

    return this.http.post<any>(this.url + 'user-registration-service/users/resetPassword', requestBody)
  }

  sendMessage(message: string) {
    console.log('Subject afterdfwefwrfrfg send',this.subject);
    this.subject.next({ text: message });
    console.log('Subject after send',this.subject);
}

getMessage(): Observable<any> {
  console.log('get message');
    return this.subject.asObservable();
}

//LocalStorage Methods
setLocalStorage(userKey,userValue){
  if(window.localStorage){
  localStorage.setItem(userKey,JSON.stringify(userValue));
  }
}

getLocalStorageValue(userKey){
  return JSON.parse(localStorage.getItem(userKey));
}

removeLocalStorageData(userKey){
  localStorage.removeItem(userKey);
}
logout(){

 // this.notify.notify("User Logged Out");
  localStorage.clear();
}

//Check Access
checkAccess():boolean{
    let status=false;
    let userStatus:any = this.getLocalStorageValue('currentUser');
    if(userStatus===null){
      this.logout();
     // this.router.navigate(['/']);
    }
    else{
      status=true;
    }
    return status;
  }

  //isLoggedIn
  /* isLoggedIn():boolean{
    let status=false;
    let userStatus:any = this.getLocalStorageValue('currentUser');
    if(userStatus===null){
      this.logout();
     }
    else{
      status=true;
    }
    return status;
  } */
  
}
