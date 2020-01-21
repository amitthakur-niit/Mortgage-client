import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../Models/property';
import { Observable } from 'rxjs';
import { valuation } from '../Models/valuation';

@Injectable({
  providedIn: 'root'
})
export class FormlistService {

  //base url : zuul
  //Keep adding your service name with api
  private url='http://localhost:8765/';
  private urlP = 'http://localhost:9002/';
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

      // propertyDetailsAll
      public PropertyDetailAll(): Observable<any>{
        return this.http.get<any>(this.urlP + '/api/propertyDetailAll');
      } 


       // propertyDetailsAll
       public PaymentDetailById(data:Number): Observable<any>{
        return  this.http.get<any>(this.urlP + `api/getPaymentDetailsById/`+data.toLocaleString());
      } 

    //property0details-serviceGet
    public propertyDataById(id:Number):Observable<any>{
         return  this.http.get<any>(this.urlP + `api/propertyDetailsById/`+id.toLocaleString());
         
        
        }

      //confirmMortgage
      public fetchConfirmMortgageDetails():Observable<any>{
        return this.http.get<any>(this.url + `mortgage-service/api/confirmMortgage/5`);  
      }


      // ValuationService
      public valuationDataById(id:Number):Observable<valuation[]>{
        return this.http.get<any>(this.urlP + '/api/valuation/'+id.toLocaleString());

      }

      // // valuationAll
      // public valuationsAll():Observable<any[]>{
      //   return this.http.get<any>(this.urlP + '/api/valuationAll');

      // }
      //mortgage-options
      public fetchMortgageOptions():Observable<any>{
        return this.http.get<any>(this.url + `mortgage-service/api/mortgageOptions`);
    
        //return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
    
    
      }
}
