import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormlistService } from 'src/app/services/formlist.service';
import { AuthclientService } from 'src/app/services/authclient.service';


export interface ConfirmMortgage{
  buyerType: string;
  repaymentMethod:string;
  mortgageTerm:string;
  estimatedPropertyValue:number;
  borrowingAmount:number;
  loanToValue:number;
  initialrate:number;
  followOnRate:number;
  rateFinishDate:number;
  productFee:number;
  productfeeAddedToLoanAmt:number;
  monthlyRepayment:number;
}

@Component({
  selector: 'app-confirm-mortgage',
  templateUrl: './confirm-mortgage.component.html',
  styleUrls: ['./confirm-mortgage.component.scss']
})

export class ConfirmMortgageComponent implements OnInit {


  confMortgageData :any;
  displayedColumns: string[] = ['buyerType', 'repaymentMethod', 'mortgageTerm', 'estimatedPropertyValue','borrowingAmount','loanToValue','initialrate','followOnRate','rateFinishDate','productFee','productfeeAddedToLoanAmt','monthlyRepayment'];
  constructor(private apiService:FormlistService,private router: Router, private authService: AuthclientService) { }

  ngOnInit() {

    const userData = this.authService.getLocalStorageValue('currentUser');
    let id=userData.userId;

    this.apiService.fetchConfirmMortgageDetails(id).subscribe((data)=>{
      console.log("confMortgageData",data);
      this.confMortgageData =data;
    }); 

    
  }
  
  public selectDiffMortgage(){
    this.router.navigateByUrl('/content/(sidebar:mortgageOptions)');
  };


  Navigate(){
    this.router.navigateByUrl('/content/(sidebar:propertyDetails)');
  }

  //getLocalStorageData
  //this.authService.
}