import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-check-status',
  templateUrl: 'check-status.component.html',
  styleUrls: ['check-status.component.css']
})
export class CheckStatusComponent implements OnInit {

  customers: Customer[];
  error: any;
  neededLoanCode : string;
  buttonClicked : string;



    constructor(private customerService : CustomerService, private router: Router){}

  getCustomers() {

    this.customerService.getCustomers()
        .then(customers => {
          this.customers = customers;
          console.log('success');
        }).catch(error => {
      this.error = error;
      console.log(error);
    });
  };

  ngOnInit() {
    this.getCustomers();

  }

  checkLoanCode(loan_code: string){
    this.neededLoanCode = loan_code;
    this.buttonClicked = "true";
    console.log(loan_code);




  }
  // submitLoanApplication(name: string,  surname: string, personal_code: number, doc_type: string, doc_code: string, country: string, city: string, address: string, phone_number: number, email: string, salary: number, amount: number, term: number, payment_day: number, loan_code: string ):void{
  //   console.log(name + surname + amount);

}
