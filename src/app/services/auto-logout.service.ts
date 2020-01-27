import { Injectable, NgZone } from '@angular/core';
import { AuthclientService } from './authclient.service';
import { Router } from '@angular/router';


const AUTO_LOGOUT_TIME = 0.1 // in Minutes
const CHECK_INTERVAL = 1000 // in ms
const STORE_KEY = 'lastActivity'; 


@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {

  constructor(
    private auth: AuthclientService,
    private router: Router,
    private ngZone: NgZone

  ) { 

    this.check();
    this.initListener();
    this.initTimer();
  }

  get lastActivity() {
    return parseInt(this.auth.getLocalStorageValue(STORE_KEY));
  }
  set lastActivity(value) {
    this.auth.setLocalStorage(STORE_KEY, value);
  }


  initListener() {
    this.ngZone.runOutsideAngular(() => {
      document.body.addEventListener('click', () => this.reset());
      document.body.addEventListener('mouseover',()=> this.reset());
      document.body.addEventListener('mouseout',() => this.reset());
      document.body.addEventListener('keydown',() => this.reset());
      document.body.addEventListener('keyup',() => this.reset());
      document.body.addEventListener('keypress',() => this.reset());
    });
  }

  initTimer(){
    this.ngZone.runOutsideAngular(()=>{
      setInterval(()=>{
        this.check();
      },CHECK_INTERVAL)
    })
  }


  reset(){
    this.lastActivity = Date.now();
  }

  check(){
    const now = Date.now();
    const timeleft = this.lastActivity + AUTO_LOGOUT_TIME * 60 * 1000;
    const timeDifference = timeleft - now;
    const isTimedOut = timeDifference < 0;

    this.ngZone.run(()=>{
      if(isTimedOut && this.auth.checkAccess()){
        console.log('User logged out');
        this.router.navigateByUrl('/login');
      }
    })
  }



}
 /* https://medium.com/@sean.nicholas/how-we-implemented-auto-logout-client-side-c060b1eb311c
  https://stackoverflow.com/questions/45911893/automatic-logout-in-angular-2-after-few-minutes */
  