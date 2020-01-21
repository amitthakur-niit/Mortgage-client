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
  value : valuation[];
  prop: Property[];
  pay: PaymentDetails;


  // sortCode : Number;
  // accountNumber : Number;
  // accountHolderName : String;
  // currentCircumstances: Number;
  // dayOfPayment : Number;
 
  displayedColumns2: string[] = ['isPropertyInScotland', 'contactPerson', 'contactName', 'contactNumber'];
  displayedColumns: string[] = ['userId','property_id','postCode','propertyType', 'numberOfBedrooms', 'propertyBuilt', 'propertyAge', 'isPropertyCovered', 'tenureType' ];
  displayedColumns3: string[] = ['sortCode','accountNumber','accountHolderName','currentCircumstances','dayofPayment'];


  dataSource:any ;
  dataSource2:any ;
  dataSource3:any;

 //  dataSource2 = new MatTableDataSource<valuation>(this.value);
  
 

  fetchValuationById() : void{
   this.formlistService.valuationDataById().subscribe(
    resultArray  =>{ this.value = resultArray
                    this.dataSource2 =resultArray
                    console.log("resultArray from valutaionById",resultArray);

    }, error=>{
       console.log("Error :: " + error)
    }
    
    )

  }

  fetchPropertdetailsById(): void {
     this.formlistService.propertyDataById()
        .subscribe(
             resultArray => {this.prop = resultArray
                            this.dataSource = resultArray
                            console.log("resultArray from propertyByID",resultArray);

            },
             error => {console.log("Error :: " + error)
          }
        )
 }


// fetchPropertyAlldetails(): void {
//   this.dataSource = new MatTableDataSource<Property>(this.prop);

//   this.formlistService.PropertyDetailAll()
//       .subscribe(
//           resultArray => {this.prop = resultArray
//                           this.dataSource = resultArray
//                           console.log("resultArray from propertyAll",resultArray);

//           },
//           error => {console.log("Error :: " + error)
//         }
//       )
// }


// fetchValuationsAlldetails(): void {
//   this.dataSource2 = new MatTableDataSource<valuation>(this.value);
//   this.formlistService.valuationsAll()
//       .subscribe(
//           resultArray => {
//             this.value = resultArray
//             this.dataSource2 = resultArray
//             console.log("resultArray from ValuationAll",this.dataSource2);
//           },
//           error => {console.log("Error :: " + error)
//         }
//       )
// }


fetchPaymentById(): void {
 // this.dataSource3 = new MatTableDataSource<PaymentDetails>(this.pay);
  //user id hardcoded  
  this.formlistService.PaymentDetailById(12)
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
    //this.fetchPropertydetails();
    this.fetchPropertdetailsById();
   this.fetchValuationById();
   // this.fetchPropertyAlldetails();
   // this.fetchValuationsAlldetails();
    this.fetchPaymentById();

  }




  constructor(private formlistService: FormlistService , private router: Router ) {

  // this.dataSource = new MatTableDataSource<Property>(this.prop);
   // this.dataSource2 = new MatTableDataSource<valuation>(this.value);
      
     }


}
