import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primer proyecto';
  public counter:number=10;

increaseBy(value:number):void{
 

  this.counter+=value;
}
resetCounter():void{
  this.counter=10;
}

}

