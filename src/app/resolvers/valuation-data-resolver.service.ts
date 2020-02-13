import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { FormlistService } from '../services/formlist.service';
import { Observable } from 'rxjs';
const userId = JSON.parse(localStorage.getItem('currentUser')).userId;

@Injectable({
  providedIn: 'root'
})
export class ValuationDataResolver implements Resolve<any> {

  constructor(private formService : FormlistService) { }

  


  resolve() : Observable<any> {
    return this.formService.valuationDataById(userId);
  }

}
