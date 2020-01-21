import { Component, OnInit } from '@angular/core';
import { FormlistService } from 'src/app/services/formlist.service';
import { Property } from 'src/app/Models/property';
import { Router } from '@angular/router';
import { valuation } from 'src/app/Models/valuation';
import { MatTableDataSource } from '@angular/material';
import { PaymentDetails } from 'src/app/Models/PaymentDetails';

@Component({
  selector: 'app-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.scss']
})
export class ReviewAndSubmitComponent implements OnInit {
  value ; 
  prop: Property[];
  pay: PaymentDetails;
  userId:Number;

  
 
  displayedColumns2: string[] = ['isPropertyInScotland', 'contactPerson', 'contactName', 'contactNumber'];
  displayedColumns: string[] = ['userId','property_id','postCode','propertyType', 'numberOfBedrooms', 'propertyBuilt', 'propertyAge', 'isPropertyCovered', 'tenureType' ];
  displayedColumns3: string[] = ['sortCode','accountNumber','accountHolderName','currentCircumstances','dayofPayment'];


  dataSource:any ;
  dataSource2:any ;
  dataSource3:any;
 constructor(private formlistService: FormlistService , private router: Router, ) {

  
      
     }

  fetchValuationById() : void{
   this.formlistService.valuationDataById(this.userId).subscribe(
    resultArray  =>{ this.value = resultArray
                    this.dataSource2 =resultArray
                    console.log("resultArray from valutaionById",resultArray);

    }, error=>{
       console.log("Error :: " + error)
    }
    
    )

  }

  fetchPropertdetailsById(): void {
     this.formlistService.propertyDataById(this.userId)
        .subscribe(
             resultArray => {this.prop = resultArray
                            this.dataSource = resultArray
                            console.log("resultArray from propertyByID",resultArray);

            },
             error => {console.log("Error :: " + error)
          }
        )
 }

fetchPaymentById(): void {
  
  this.formlistService.PaymentDetailById(this.userId)
      .subscribe(
          resultArray => {this.pay = resultArray
                          this.dataSource3 = resultArray
                          console.log("resultArray33 from pay",this.dataSource3);
          },
          error => {console.log("Error :: " + error)
        }
      )
}



  ngOnInit(): void {
    
    this.fetchPropertdetailsById();
   this.fetchValuationById();
  
    this.fetchPaymentById();
    const currentUserData = JSON.parse(localStorage.getItem('currentUser'))
    this.userId = currentUserData.userId;
  }




 


}
