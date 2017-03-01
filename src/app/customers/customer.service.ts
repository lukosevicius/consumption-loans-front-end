import { Injectable } from '@angular/core';
//import {CUSTOMERS} from "./mock-data";
import {Customer} from "./customer";
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CustomerService {


  constructor(private http: Http) { }

  //DUOMENU IMIMAS IS mock-data.ts
  // getCustomers(): Promise<Customer[]> {
  //   return Promise.resolve(CUSTOMERS);
  // }

  private customersUrl = 'api/customers';
  private mydbUrl = 'http://localhost:8080/customers';
  private beanloanUrl = 'https://bank-loans-project.herokuapp.com/loan/get/all/';
  private beanloanGetIDUrl = 'https://bank-loans-project.herokuapp.com/loan';


  // DUOMENU IMIMAS IS LOCAL DUOMENU BAZES
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.beanloanUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }





  // getCustomers(): Promise<Customer[]> {
  //   return this.http.get(this.customersUrl)
  //       .toPromise()
  //       .then(response => response.json().data as Customer[])
  //       .catch(this.handleError);
  // }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  getCustomer(id: number): Promise<Customer> {
    const url = `${this.beanloanGetIDUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }


  updateAccept(customer: Customer): Promise<Customer> {
    const url = `${"https://bank-loans-project.herokuapp.com/loan/accept"}/${customer.id}`;
    return this.http
        .put(url, JSON.stringify(customer), {headers: this.headers})
        .toPromise()
        .then(() => customer)
        .catch(this.handleError);
  }

    updateDecline(customer: Customer): Promise<Customer> {
        const url = `${"https://bank-loans-project.herokuapp.com/loan/decline"}/${customer.id}`;
        return this.http
            .put(url, JSON.stringify(customer), {headers: this.headers})
            .toPromise()
            .then(() => customer)
            .catch(this.handleError);
    }

  message: string;


    private headers = new Headers({'Content-Type': 'application/json'});


    create(name: string,  surname: string, personal_code: number, doc_type: string, doc_code: string, country: string, city: string, address: string, phone_number: number, email: string, salary: number, amount: number, term: number, payment_day: number, loan_code: string): Promise<Customer> {

    console.log("cj suveike");

    return this.http
        .post("https://bank-loans-project.herokuapp.com/loan/newjson", ({
          name: name,
          surname: surname,
          personal_code: personal_code,
          doc_type: doc_type,
          doc_code: doc_code,
          country: country,
          city: city,
          address: address,
          phone_number: phone_number,
          email: email,
          salary: salary,
          amount: amount,
          term: term,
          payment_day: payment_day,
            loan_code: loan_code
        }), {headers: this.headers})
        .toPromise()
        //.then(customer => res.json().data)
        .catch(this.handleError);



  }
}





