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
  onDelete:EventEmitter <string> = new EventEmitter();
  // onDelete

  // onDelete(id: string ): void {

  //   this.newCharacterId.emit(id)
  // }

  onDeleteCharacter(id?: string): void {
    console.log(id)
    if( !id ) return ;
    this.onDelete.emit(id)
    // this.charterList.splice(index,1)
  }
}
