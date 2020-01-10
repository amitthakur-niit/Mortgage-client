import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../Models/property';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormlistService {

  //base url : zuul
  //Keep adding your service name with api
  private url='http://localhost:8765/';
  constructor(private http:HttpClient) { }

  //Valuation Service
  postValuationData(data:any){
    return this.http.post(this.url+'mortgage-service/api/valuation',data);
    }

    //property0details-service
    propertyData (requestBody:Property): Observable<any> {
      //registerData(data: Register) : Observable < Register > {
        return this.http.post<any>(this.url + 'mortgage-service/api/propertyDetails', requestBody)
      }
}
