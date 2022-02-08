import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {

  @Input() numberArray: any;

  constructor() { }

  ngOnInit(): void {
  }


  isEven(num: number) {
    return num % 2 == 0;
  }

}
