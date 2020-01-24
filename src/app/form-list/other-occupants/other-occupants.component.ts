import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-occupants',
  templateUrl: './other-occupants.component.html',
  styleUrls: ['./other-occupants.component.scss']
})
export class OtherOccupantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  
  buttonToggleColorCircumstance(v:Number){

    if(v===0){
     document.getElementById('nos').classList.add('highlight');
     document.getElementById('yess').classList.remove('highlight');
   }
 
   if(v===1){
   document.getElementById('yess').classList.add('highlight');
   document.getElementById('nos').classList.remove('highlight');
   }
   if(v===3){
    document.getElementById('no').classList.add('highlight');
    document.getElementById('yes').classList.remove('highlight');
  }

  if(v===2){
  document.getElementById('yes').classList.add('highlight');
  document.getElementById('no').classList.remove('highlight');
  }

  if(v===5){
    document.getElementById('nos1').classList.add('highlight');
    document.getElementById('yes1').classList.remove('highlight');
  }

  if(v===4){
  document.getElementById('yes1').classList.add('highlight');
  document.getElementById('nos1').classList.remove('highlight');
  }



 }
  



}
