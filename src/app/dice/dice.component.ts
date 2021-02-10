import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  sum: any=0;
  public dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  dice1() {
    var result = this.dice.roll();
    this.printNumber(result,1);
  }
  dice2() {
    var result = this.dice.roll();
    this.printNumber(result, 2);
  }
  dice3() {
    var result = this.dice.roll();
    this.printNumber(result, 3);
  }
  dice4() {
    var result = this.dice.roll();
    this.printNumber(result, 4);
  }
  dice5() {
    var result = this.dice.roll();
    this.printNumber(result, 5);
  }
  printNumber(number, type) {
    if (type == 1) {
      var placeholder1 = document.getElementById('placeholder1');
      placeholder1.innerHTML = number;
    }
    if (type == 2) {
      var placeholder2 = document.getElementById('placeholder2');
      placeholder2.innerHTML = number;
    }
    if (type == 3) {
      var placeholder3 = document.getElementById('placeholder3');
      placeholder3.innerHTML = number;
    }
    if (type == 4) {
      var placeholder4 = document.getElementById('placeholder4');
      placeholder4.innerHTML = number;
    }
    if (type == 5) {
      var placeholder5 = document.getElementById('placeholder5');
      placeholder5.innerHTML = number;
    }
  }
  getSum() {
    let value1 = (<HTMLInputElement>document.getElementById("placeholder1")).innerHTML;
    let value2 = (<HTMLInputElement>document.getElementById("placeholder2")).innerHTML;
    let value3 = (<HTMLInputElement>document.getElementById("placeholder3")).innerHTML;
    let value4 = (<HTMLInputElement>document.getElementById("placeholder4")).innerHTML;
    let value5 = (<HTMLInputElement>document.getElementById("placeholder5")).innerHTML;
    if (value1 == "") {
      alert("Please Roll dice 1");
      return;
    }
    if (value2 == "") {
      alert("Please Roll dice 2");
      return;
    }
    if (value3 == "") {
      alert("Please Roll dice 3");
      return;
    }
    if (value4 == "") {
      alert("Please Roll dice 4");
      return;
    }
    if (value5 == "") {
      alert("Please Roll dice 5");
      return;
    }
    this.sum = parseInt(value1) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5);
    console.log(">>>value1", value1)
  }
  redirect() {
    this.router.navigate(["calculator"]);
  }
}
