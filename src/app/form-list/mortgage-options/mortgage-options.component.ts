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
  optionId: number;
}
@Component({
  selector: 'app-mortgage-options',
  templateUrl: './mortgage-options.component.html',
  styleUrls: ['./mortgage-options.component.scss']
})
export class MortgageOptionsComponent implements OnInit {
  optionsData: any;
  displayedColumns: string[] = ['description', 'initialRate', 'monthlyRepayment', 'productFee', 'optionId'];
  constructor(private apiService: FormlistService, private router: Router, private authService: AuthclientService) {
  }

  ngOnInit() {

    this.apiService.fetchMortgageOptions().subscribe((data) => {
      console.log("data:", data);
      this.optionsData = data;
    });
  }

  public selectAction(element) {

    this.router.navigateByUrl('form/content/(sidebar:confirmMortgage)', element);
  }

}


