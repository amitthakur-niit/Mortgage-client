import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar:MatSnackBar, private zone: NgZone) { }



  public notify(message,action='Close',duration=5000){
    this.zone.run(()=>{
      this.snackBar.open(message,action,{duration,
        verticalPosition: 'top',
          horizontalPosition:'right',
          panelClass:['success']
      });
    });
  }

  public alert(message,action='Close',duration=5000){
    this.zone.run(()=>{
      this.snackBar.open(message,action,{duration,
        verticalPosition: 'top',
        horizontalPosition:'right',
        panelClass:['warn']
      });
    });
  }
}
