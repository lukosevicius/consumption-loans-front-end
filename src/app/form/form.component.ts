import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customers/customer.service";
import {Customer} from "../customers/customer";

@Component({
  selector: 'app-anketa',
  templateUrl: 'form2.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private customerService : CustomerService){}


  ngOnInit() {
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.customerService.create(name)
  //       .then(customer => {
  //         this.customers.push(customer);
  //         this.selectedCustomer = null;
  //       });
  // }

  thisCustomer : Customer;
  loan_code: string;

  message: string;
  validd = false;



  submitLoanApplication(name: string,  surname: string, personal_code: number, doc_type: string, doc_code: string, country: string, city: string, address: string, phone_number: number, email: string, salary: number, amount: number, term: number, payment_day: number):void{
     console.log(name + surname + amount);

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.loan_code = getRandomInt(100, 999).toString()+'-'+getRandomInt(100, 999).toString()+'-'+getRandomInt(100, 999).toString();
    console.log(this.loan_code);

    this.message = "Užsirašykite kodą";

    this.customerService.create(name, surname, personal_code, doc_type, doc_code, country, city, address, phone_number, email, salary, amount, term, payment_day, this.loan_code);






  }

  // "name": "mantas",
  // "surname": "luko",
  // "personal_code": null,
  // "doc_type": null,
  // "doc_code": null,
  // "country": null,
  // "city": null,
  // "address": null,
  // "phone_number": null,
  // "email": null,
  // "salary": null,
  // "amount": 555,
  // "term": null,
  // "payment_day": null,



}
