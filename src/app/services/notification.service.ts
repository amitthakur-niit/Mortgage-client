import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar:MatSnackBar, private zone: NgZone) { }



  public notify(message,action='success',duration=3000){
    this.zone.run(()=>{
      this.snackBar.open(message,action,{duration});
    });
  }

  public alert(message,action='alert',duration=3000){
    this.zone.run(()=>{
      this.snackBar.open(message,action,{duration});
    });
  }
}
