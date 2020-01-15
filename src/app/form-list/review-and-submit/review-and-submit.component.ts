import { Component, OnInit } from '@angular/core';
import { FormlistService } from 'src/app/services/formlist.service';
import { Property } from 'src/app/Models/property';

@Component({
  selector: 'app-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.scss']
})
export class ReviewAndSubmitComponent implements OnInit {

  prop: Property[];

  fetchPropertydetails(): void {
    this.formlistService.propertyDataById()
        .subscribe(
            resultArray => this.prop = resultArray,
            error => console.log("Error :: " + error)
        )
}



  ngOnInit(): void {
    this.fetchPropertydetails();
  }

//   constructor(private formlistService:  FormlistService) { }
// propertyDetail :string
//   ngOnInit() {
//     this.FormlistService = this.formlistService.propertyDataById();
//   }


  constructor(private formlistService: FormlistService ) {
      
     }


}
