import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../Models/property';
import { Observable } from 'rxjs';
import { valuation } from '../Models/valuation';
import { PaymentDetails } from '../Models/PaymentDetails';

@Injectable({
  providedIn: 'root'
})
export class FormlistService {

  //base url : zuul
  //Keep adding your service name with api
  private url = 'http://localhost:8765/';

  constructor(private http: HttpClient) { }

  //Valuation Service
  postValuationData(data: any) {
    return this.http.post(this.url + 'mortgage-service/api/valuation', data);
  }

  //property0details-service
  propertyData(requestBody: Property): Observable<any> {
    //registerData(data: Register) : Observable < Register > {
    return this.http.post<any>(this.url + 'mortgage-service/api/propertyDetails', requestBody)
  }

  // propertyDetailsAll
  public PropertyDetailAll(): Observable<any> {
    return this.http.get<any>(this.url + 'mortgage-service/api/propertyDetailAll');
  }

  public PaymentDetailById(id: Number): Observable<any> {
    return this.http.get<any>(this.url + 'mortgage-service/api/getPaymentDetailsById/' + id.toLocaleString());
  }

  //property0details-serviceGet
  public propertyDataById(id: Number): Observable<any> {
    return this.http.get<any>(this.url + `mortgage-service/api/propertyDetailsById/` + id.toLocaleString());


  }

  getPropertyDetails(data: Number) {
    return this.http.get<any>(this.url + 'mortgage-service/api/propertyDetailsById/' + data);

    // throw new Error("Method not implemented.");
  }

  //confirmMortgage
  public fetchConfirmMortgageDetails(id: Number): Observable<any> {
    return this.http.get<any>(this.url + `mortgage-service/api/confirmMortgage/` + id);
  }


  // ValuationService
  public valuationDataById(id: Number): Observable<valuation[]> {
    return this.http.get<any>(this.url + 'mortgage-service/api/valuation/' + id.toLocaleString());

  }

  // // valuationAll
  // public valuationsAll():Observable<any[]>{
  //   return this.http.get<any>(this.urlP + '/api/valuationAll');

  // }
  //mortgage-options
  public fetchMortgageOptions(): Observable<any> {
    return this.http.get<any>(this.url + `mortgage-service/api/mortgageOptions`);

    //return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);


  }

  savePaymentDetails(requestBody: PaymentDetails): Observable<any> {
    return this.http.post<any>(this.url + 'mortgage-service/api/payment-details', requestBody)
  }


  updatePaymentDetails(requestBody: PaymentDetails): Observable<any> {
    return this.http.put<any>(this.url + 'mortgage-service/api/update/payment-details', requestBody)
  }

}
