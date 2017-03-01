import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Customer} from '../customer';
import {CustomerService} from "../customer.service";



@Component({
  moduleId: module.id,
  selector: 'my-customers',
  templateUrl: 'customer-table.component.html',
  styleUrls: ['customer-table.component.css'],
  // providers: [CustomerService]
  // providerius perkelem i app.module
})
export class CustomerComponent implements OnInit{
  // Customers = CUSTOMERS;
  customers: Customer[];
  selectedCustomer: Customer;
  error: any;


  constructor(private customerService : CustomerService, private router: Router){}

  // getCustomers(): void{
  //   this.customerService.getCustomers().then(customers => this.customers = customers);
  // }

  gotoDetail(): void {
    this.router.navigate(["/detail", this.selectedCustomer.id]);
  }
//   static checkIfNoDraft(customer) {
//   return customer.draft == false;
// }

  // this.customers = customers.filter(CustomerComponent.checkIfNoDraft);


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


  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }

  ngOnInit(): void{


    this.getCustomers();

    //this.customers.filter(checkIfNoDraft);
  }

}




