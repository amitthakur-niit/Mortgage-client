import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { LogIn } from '../Models/logIn';
import { Question } from '../Models/question';
import { Register } from '../Models/register';
import { Router } from '@angular/router';
import { Forget } from '../auth/forgot-pasword/forgetPassword';
import { Reset } from '../auth/reset-passowrd/resetPassword';

@Injectable({
  providedIn: 'root'
})
export class AuthclientService {

  private url = 'http://localhost:8765/';
  public subject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient, private router: Router) { }

  //user-logIn service
  logInData (requestBody: LogIn): Observable<BigInteger> {
    return this.http.post<BigInteger>(this.url + 'user-registration-service/users/logIn', requestBody)
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

  checkAccess():boolean{
    let status=false;
    let userStatus:any=JSON.parse(localStorage.getItem("currentUser"));
    if(userStatus===null){
      this.logout();
      this.router.navigate(['/']);
    }
    else{
      status=true;
    }
    return status;
  }

  logout(){
   localStorage.removeItem("currentUser");
  }

}
