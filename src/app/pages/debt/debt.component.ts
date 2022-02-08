import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss'],
})
export class DebtComponent implements OnInit {
  public form: FormGroup;

  debtCustomerList: any = [];

  customerList = [
    {
      id: 1,
      name: 'Si Thu Win',
    },
    {
      id: 2,
      name: 'Kamal',
    },
    {
      id: 3,
      name: 'Bhattarai',
    },
    {
      id: 4,
      name: 'Raju',
    },
    {
      id: 5,
      name: 'Kanch',
    },
  ];

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

    this.form.reset();
  }
}
