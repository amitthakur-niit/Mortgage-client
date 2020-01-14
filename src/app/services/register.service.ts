import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Register } from '../Models/register';
import { Question } from '../Models/question';
import { Forget } from '../auth/forgot-pasword/forgetPassword';
import { Reset } from '../auth/reset-passowrd/resetPassword';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  public subject: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  private url = 'http://localhost:8765/';
  constructor(private http: HttpClient) { }


  //Valuation Service
  postValuationData(data: any) {
    return this.http.post(this.url + 'mortgage-service/api/valuation', data).subscribe(data => { console.log(data) });
  }

  registerData (requestBody: Register): Observable<any> {
    return this.http.post<any>(this.url + 'user-registration-service/users/register', requestBody)
  }

  forgotPaswd(requestBody:Question):Observable<any>{

    return this.http.post<any>(this.url + 'user-registration-service/users/forgetPassword', requestBody)
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


}
