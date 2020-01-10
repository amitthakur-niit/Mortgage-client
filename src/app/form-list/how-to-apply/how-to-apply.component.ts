import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-how-to-apply',
  templateUrl: './how-to-apply.component.html',
  styleUrls: ['./how-to-apply.component.scss']
})
export class HowToApplyComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    console.log('inside how to apply');
    
    //get current user from session
    // if value is available then set status as true in session then we have to show the nav bar
  }

}
