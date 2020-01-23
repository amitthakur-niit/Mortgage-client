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

    //property0details-service getPropertyDetails
    propertyData (requestBody:Property): Observable<any> {
      //registerData(data: Register) : Observable < Register > {
        return this.http.post<any>(this.url + 'mortgage-service/api/propertyDetails', requestBody);
      }

      getPropertyDetails (userId:Number): Observable<any> {
        //registerData(data: Register) : Observable < Register > {
          return this.http.get<any>(this.url + 'mortgage-service/api/propertyDetailsById/'+userId);
        }
        updatePropertyDetails (requestBody:Property,userId:Number): Observable<any> {
          //registerData(data: Register) : Observable < Register > {
            return this.http.put<any>(this.url + 'mortgage-service/api/propertyDetails/'+userId,requestBody);
          }
      //confirmMortgage
      public fetchConfirmMortgageDetails():Observable<any>{
        return this.http.get<any>(`mortgage-service/api/confirmMortgage/5`);
      }

      //mortgage-options
      public fetchMortgageOptions():Observable<any>{
        return this.http.get<any>(`mortgage-service/api/mortgageOptions`);
    
        //return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
    
    
      }
}
