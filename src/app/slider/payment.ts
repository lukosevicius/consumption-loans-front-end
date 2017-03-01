export class Payment {
  monthNumber: number;
  remainingAmount: number;
  monthlyPay: number;
  monthlyInt: number;
  contractFee: number;
  constructor(monthNumber: number, remainingAmount: number, monthlyPay: number, monthlyInt: number, contractFee: number)
  {
    this.monthNumber = monthNumber;
    this.remainingAmount = remainingAmount;
    this.monthlyPay = monthlyPay;
    this.monthlyInt = monthlyInt;
    this.contractFee = contractFee;
  }
}
