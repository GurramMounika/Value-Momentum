import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{
  result:any;
  add(num1:any,num2:any){
    this.result=Number(num1)+Number(num2)
    console.log(this.result)
  }
  sub(num1:any,num2:any){
    this.result=num1-num2
    console.log(this.result)
  }
  mul(num1:any,num2:any){
    this.result=num1*num2
    console.log(this.result)
  }
  div(num1:any,num2:any){
    this.result=num1/num2
    console.log(this.result)
  }
  }
  
