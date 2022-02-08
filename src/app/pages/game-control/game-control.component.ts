import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {


  gameInterval: any;
  currentNumber = 0;
  numberArray: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }


  startGame() {
    this.gameInterval = setInterval(() => {
      this.currentNumber++;
      this.numberArray.push(this.currentNumber);


    }, 1000);
  }

  stopGame() {
    clearInterval(this.gameInterval); 
  }

}
