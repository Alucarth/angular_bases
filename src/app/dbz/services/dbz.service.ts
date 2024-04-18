import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 10000 },
  ];

  addCharacter(characer: Character): void {
    const newCharacter = { id: uuid(), ...characer };
    this.characters.push(newCharacter);
    console.log(this.characters);
  }

  // onDeleteCharacter(index: number) {
  //   console.log('Main page ', index);
  //   this.characters.splice(index, 1);
  // }

  onDeleteCharacterById ( id: string)
  {
    this.characters = this.characters.filter( character => character.id !== id  );
  }
}
