import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularServicesService {

  constructor(private http: HttpClient) { 


  }

baseUrl:"http://localhost:9001/users/forgetPassword";

   getEmployees( email:String): Observable<any>{
   return this.http.get(`${this.baseUrl}/${email}`);
  


  }
}
