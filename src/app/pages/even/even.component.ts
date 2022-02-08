import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {

  @Input() numberArray: any;

  constructor() { }

  ngOnInit(): void {
  }

  isEven(num: number) {
    return num % 2 == 0;
  }

}
