import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public charterList: Character[] = [{ name: "trunks", power: 10},]

  @Output()
  newCharacterId:EventEmitter <number> = new EventEmitter();
  // onDelete

  onDelete(index: number): void {
    this.newCharacterId.emit(index)
  }

  onDeleteCharacter(index: number): void {
    console.log(index)
    this.onDelete(index)
    // this.charterList.splice(index,1)
  }
}
