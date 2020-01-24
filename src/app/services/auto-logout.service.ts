import { Injectable, NgZone } from '@angular/core';
import { AuthclientService } from './authclient.service';
import { Router } from '@angular/router';





@Injectable({
  providedIn: 'root'
})

const AUTO_LOGOUT_TIME = 5 // in Minutes
const CHECK_INTERVAL = 1000 // in ms
const STORE_KEY = 'lastActivity'; 

export class AutoLogoutService {

  constructor(
    private auth: AuthclientService,
    private router: Router,
    private ngZone: NgZone

  ) { }

  get lastActivity() {
    return parseInt(this.auth.getLocalStorageValue(STORE_KEY));
  }
  set lastActivity(value) {
    this.auth.setLocalStorage(STORE_KEY, value);
  }


  initListener() {
    this.ngZone.runOutsideAngular(() => {
      document.body.addEventListener('click', () => this.res);
    });
  }
}
 /* https://medium.com/@sean.nicholas/how-we-implemented-auto-logout-client-side-c060b1eb311c
  https://stackoverflow.com/questions/45911893/automatic-logout-in-angular-2-after-few-minutes */
  