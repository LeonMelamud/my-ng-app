import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-class-component]',
  templateUrl: './class-component.component.html',
  styles: [`
  .text-danger{
    color :red;
  } 
  .text-special{
    background-color: yellow;
  } 
  .text-success{
    color: green;
  }
  div {
      color : orange;
    }
   `]
})
export class ClassComponentComponent implements OnInit {
  ClassComponent = 'ClassComponent';
  displayName = false;
  name = undefined;
  lastname = 'melamud';
  hasError = false;
  isSpecial = false;
  success = true;
  switchNumber = 2;
  messageClasses = {
    'text-success': !this.success,
    'text-special': !this.isSpecial,
    'text-danger': this.hasError
  }
  constructor() { }


  ngOnInit() {
  }
  greetings() {

    return `${this.name}   ${this.lastname}`;
  }
  logMessage(value) {
    console.log(value);
  }

}
