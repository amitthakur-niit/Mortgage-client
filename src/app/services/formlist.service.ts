import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormlistService {

  private url='http://localhost:8765/mortgage-service/api/valuation';
  constructor(private http:HttpClient) { }

  //Valuation Service
  postValuationData(data:any){
    return this.http.post(this.url,data);
    }

}
