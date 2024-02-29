import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angapp2';

  someValue:string="";

  number:string="";
  numbers:Array<string>=new Array<string>();

  someValues:Array<string>= new Array<string>();
  CallSomeLogic(){
    alert("Hii")
    this.someValues.push(this.someValue);
    this.someValue="";
  }


  callme(){
    this.numbers.push(this.number);
    this.number="";
  }
}
