import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormlistService } from 'src/app/services/formlist.service';


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
  constructor(private apiService:FormlistService,private router: Router) { }

  ngOnInit() {
    /* this.apiService.fetchConfirmMortgageDetails().subscribe((data)=>{
      console.log("confMortgageData",data);
      this.confMortgageData =data;
    }); */

    this.putDummyData();
  }

  public selectDiffMortgage(){
    this.router.navigateByUrl('/content/(sidebar:mortgageOptions)');
  };

  putDummyData(){
    this.confMortgageData ={
      buyerType:'New Mortgage Buyer',
      repaymentMethod:'Repayment',
      mortgageTerm:'5 years 1 month',
      estimatedPropertyValue:'$300,000',
      borrowingAmount:'$30,000',
      loanToValue:'10.00%',
      initialRate:'1.49%',
      followOnRate:'4.00%',
      rateFinishedDate:'02 April 2025',
      productFee: '$999',
      productFeeAddedToLoanAmt: 'Yes',
      monthlyRepayment:'$528'
    }
  }

  Navigate(){
    this.router.navigateByUrl('/content/(sidebar:propertyDetails)');
  }

}