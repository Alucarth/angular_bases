import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters:Character[] = [
    { name: "krillin", power: 1000},
    { name: "Goku", power: 10000},
  ];

  onNewCharacter( characer: Character):void{
    console.log(characer)
    this.characters.push(characer)
  }

  onDeleteCharacter( index: number)
  {
    console.log('Main page ', index)
    this.characters.splice(index, 1)
  }
}
