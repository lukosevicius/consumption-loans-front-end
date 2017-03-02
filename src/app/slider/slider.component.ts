import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {Payment} from "./payment";
declare var $: any;

@Component({
  selector: 'radio-overview-example',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css']
})

export class SliderComponent implements OnInit {
  loanValue: number = 500;
  incomeValue: number = 245;
  deptorsValue: number = 245;
  valida: boolean = false;
  period: number = 60;
  annualRate: number = 0.16;
  ifalone: boolean = true;
  list: Payment[];
  error : boolean = false;

  constructor() {

  }


  ngOnInit() {

  }

  showValue(loanValue: number, period: number) {
    this.valida = true ;
    this.list = [];
    let r = this.annualRate / 12;
    let monthlyPayment = 0;
    let monthlyInterest = 0;
    let leftValue = this.loanValue;
    monthlyPayment = this.calculateMonthlyPayment(this.loanValue, this.period);
    for (let i: number = 1; i <= this.period; i++)
    if(monthlyPayment <= (this.incomeValue * 0.4)+(this.deptorsValue * 0.4) && this.loanValue <= 20000){
    {
      monthlyInterest = this.calculateMonthlyInterest(leftValue);
      this.list.push(new Payment(i, leftValue, monthlyPayment, monthlyInterest, 0.70));
      leftValue = leftValue - (monthlyPayment - monthlyInterest);
    }}
    else
      this.error= true;
    console.log(this.list);
    //return this.list;
  }
  changeMerriedStateToAlone()
  {
    this.ifalone = true;
  }
  changeMerriedStateToMerried()
  {
    this.ifalone = false;
  }
  calculateMonthlyPayment(loanValue : number, period: number)
  {
    return ((loanValue * (this.annualRate/12))/(1-((1+(this.annualRate/12))**(-1*this.period))));
  }
  calculateMonthlyInterest(loanValue: number)
  {
    return loanValue * this.annualRate/12;
  }

}




