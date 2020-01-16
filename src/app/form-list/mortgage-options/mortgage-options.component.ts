import { Component, OnInit } from '@angular/core';

import { MortageOptions } from '../../Models/mortage-options';
import { Observable } from 'rxjs';
import { logging } from 'protractor';
import { Router } from '@angular/router';
import { FormlistService } from 'src/app/services/formlist.service';
import { AuthclientService } from 'src/app/services/authclient.service';



export interface PeriodicElement {
  description: string;
  initialRate: number;
  monthlyRepaymentght: number;
  productFee: string;
  optionId : number;
}
@Component({
  selector: 'app-mortgage-options',
  templateUrl: './mortgage-options.component.html',
  styleUrls: ['./mortgage-options.component.scss']
})
export class MortgageOptionsComponent implements OnInit {
  optionsData :any;
  displayedColumns: string[] = ['description', 'initialRate', 'monthlyRepayment', 'productFee','optionId'];
  constructor(private apiService: FormlistService,private router: Router, private authService : AuthclientService) { 
  }

    ngOnInit() {

      this.putDummyValues()
      /* this.apiService.fetchMortgageOptions().subscribe((data)=>{
        console.log("data:",data);
        this.optionsData =data;
      }); */
    }

    public selectAction(element){
      
      this.router.navigateByUrl('/content/(sidebar:confirmMortgage)',element);
    }

    putDummyValues(){
      this.optionsData = [{
        description:'Fixed 5 Years',
        initialRate:'1',
        monthlyRepayment:'514',
        productFee:'70'

      },
      {
        description:'Fixed 10 Years',
        initialRate:'0.9',
        monthlyRepayment:'123',
        productFee:'100'

      },
      {
        description:'Fixed 15 Years',
        initialRate:'0.6',
        monthlyRepayment:'314',
        productFee:'17'
      },
      {
        description:'Fixed 3 Years',
        initialRate:'1.3',
        monthlyRepayment:'714',
        productFee:'78'
      }
    
    
    
    
    ]
    }
    //get LocalStorage Data
    
  }


