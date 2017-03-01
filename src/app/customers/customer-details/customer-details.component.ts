import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Customer} from "../customer"
import { CustomerService} from "../customer.service"

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'customer-details',
  templateUrl: 'customer-details.component.html',
  styleUrls: ['customer-details.component.css'],

})
export class CustomerDetailsComponent implements OnInit {
  @Input()
  customer: Customer;

  // acceptLoan() {
  //   this.customer.status = "patvirtina"
  // }

  // declineLoan() {
  //   this.customer.status = "atmesta"
  // }

  constructor(
      private customerService: CustomerService,
      private route: ActivatedRoute,
      private location: Location
  ){}

  ngOnInit(): void{
        console.log("ngOnit suveike");
        this.route.params
            .switchMap((params: Params) => this.customerService.getCustomer(+params['id']))
            .subscribe(customer => this.customer = customer);
  }


  goBack(): void {
    this.location.back();
  }

  acceptLoan(): void {
    this.customer.status = "Patvirtinta"

    this.customerService.updateAccept(this.customer);
       // .then(() => this.goBack());
  }

  declineLoan(): void {
    this.customer.status = "Atmesta"

    this.customerService.updateAccept(this.customer);
    // .then(() => this.goBack());
  }



}


