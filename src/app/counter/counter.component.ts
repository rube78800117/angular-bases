import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
<h2>Contador es: {{counter}}</h2>
<button (click)="increaseBy(-1)">-</button>{{counter}} 
<button (click)="increaseBy(+1)">+</button> <br>
<button (click)="resetCounter()">Reset</button>
    `
})

export class CounterComponent{
    
    public title: string = 'Mi primer proyecto';
    public counter:number=10;
  
  increaseBy(value:number):void{
   
  
    this.counter+=value;
  }
  resetCounter():void{
    this.counter=10;
  }

    
}




