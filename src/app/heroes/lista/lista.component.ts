import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
public heroNames:string[] = ['Ironman','Superman','Spiderman', 'Hulk','She Hulk','Wander Woman','Thor'];
public deletedHero?:string;

deleteHero():void{
  this.deletedHero=this.heroNames.pop();
}
}

