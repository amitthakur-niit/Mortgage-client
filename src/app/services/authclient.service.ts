import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
