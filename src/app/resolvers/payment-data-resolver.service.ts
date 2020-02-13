import { Injectable } from '@angular/core';
import { FormlistService } from '../services/formlist.service';
import { Observable } from 'rxjs';

const userId = JSON.parse(localStorage.getItem('currentUser')).userId;
@Injectable({
  providedIn: 'root'
})
export class PaymentDataResolver  {

  constructor(private formService : FormlistService) { }

  


  resolve() : Observable<any> {
    return this.formService.PaymentDetailById(userId);
  }
}
