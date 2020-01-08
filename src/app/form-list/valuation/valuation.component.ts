import { Component, OnInit } from '@angular/core';
import { FormlistService } from 'src/app/services/formlist.service';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.scss']
})
export class ValuationComponent implements OnInit {

  constructor( private service: FormlistService) { }

  ngOnInit() {
  }

  postFormGroup() {
    let data={
      isPropertyInScotland : this.isPropertyInScotland,
      contactPerson : this.formGroup.value.ContactPerson,
      contactName : this.formGroup.value.ContactName,
      contactNumber : this.formGroup.value.ContactNumber,
      
    }

 console.log(this.formGroup.value.ContactPerson);
 this.service.postValuationData().
 this.service.postValuationData(data).subscribe(data=>console.log(data));


 }

}
