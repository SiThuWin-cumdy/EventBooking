import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-debt-customer',
  templateUrl: './debt-customer.component.html',
  styleUrls: ['./debt-customer.component.scss'],
})
export class DebtCustomerComponent implements OnInit {
  public form: FormGroup;

  debtCustomerList: any = [];
  totalAmount = 0;
  customerList = [
    {
      id: 1,
      name: 'Si Thu Win',
      totalDebtAmount: 5000,
    },
    {
      id: 2,
      name: 'Kamal',
      totalDebtAmount: 54000,
    },
    {
      id: 3,
      name: 'Bhattarai',
      totalDebtAmount: 244000,
    },
    {
      id: 4,
      name: 'Raju',
      totalDebtAmount: 75000,
    },
    {
      id: 5,
      name: 'Kanch',
      totalDebtAmount: 3000,
    },
  ];

  currentAmount = 0;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      customerName: [null, Validators.compose([Validators.required])],
      amount: [null, Validators.compose([Validators.required])],

      date: [null],
    });
  }

  ngOnInit(): void {}

  addNewDebt() {
    let today = new Date();
    let date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const customerDetail = {
      customerName: this.form.value.customerName,
      amount: this.form.value.amount,
      date: date,
    };
    this.debtCustomerList.push(customerDetail);

    let finalAmount = this.totalAmount - this.form.value.amount;

    let customer = this.customerList.find(
      (x) => x.id == this.form.value.customerName
    );
    if (customer) {
      customer.totalDebtAmount = finalAmount;
    }
    this.form.reset();
    this.totalAmount = 0;
  }
  onChange(event: any) {
    this.form.controls['amount'].setValue(null);
    let customer = this.customerList.find((x) => x.id == event.target.value);
    if (customer) {
      this.totalAmount = customer.totalDebtAmount;
    }
  }

  submitAmount(totalAmount: any) {
    console.log(totalAmount, this.currentAmount);
  }
}
