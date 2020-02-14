import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { FormlistService } from '../services/formlist.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const userId = JSON.parse(localStorage.getItem('currentUser')).userId;

@Injectable({
  providedIn: 'root'
})
export class PropertyDataResolver implements Resolve<any> {

  constructor(private formService : FormlistService) { }

  


  resolve() : Observable<any> {
    return this.formService.propertyDataById(userId).pipe(
      catchError( err => Observable.throw(err.json().error))
    )
  }
}
