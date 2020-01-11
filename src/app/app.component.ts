import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthclientService } from './services/authclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Mortgage-Client';
  status:boolean=false;

  ngOnInit(){
    this.setIsLoggedIn()
  }

  
  constructor(private service:AuthclientService){}

   /* checker = setInterval(()=>{
    this.check();
  },100) */

  /* check(){
    this.status=this.service.checkAccess();
    console.log(this.status);
  } */

  setIsLoggedIn(){
  this.service.checkAccess().subscribe( value =>{
    this.status = value.valueOf();
    console.log("inside the app compo:",this.status);
  })
}

  onStatusChange(data : any) {
    console.log('emitted data '+data);
    this.status = data;
  }

    
 /*  ngOnDestroy(): void {
    clearInterval(this.checker);
  } */


}
