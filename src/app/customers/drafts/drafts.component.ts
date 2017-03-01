import { Component } from '@angular/core';

import {Customer} from "../customer"
import {CustomerService} from "../customer.service"

@Component({
  selector: 'uncompleted-drafts ',
  templateUrl: './drafts.component.html',
  styleUrls: ['drafts.component.css'],
})
export class DraftsComponent {

  customers: Customer[] = [];

  constructor (private customerService: CustomerService) {}



  ngOnInit(): void {
    function checkIfHasDraft(customer) {
      return customer.status == 'Nebaigta';
    }

    this.customerService.getCustomers()
        .then(customers => this.customers = customers.filter(checkIfHasDraft));
  }


}
