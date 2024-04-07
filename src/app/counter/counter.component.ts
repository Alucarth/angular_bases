import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <h3> counter {{ counter }}</h3>
    <button (click)="increaseBy(+1)" > +1 </button>
    <button (click)="resetCounter()"> reset </button>
    <button (click)="increaseBy(-1)" > -1 </button>
  `
})
export class CounterComponent {
  public counter: number = 0

  increaseBy(count: number){
    this.counter += count
  }

  resetCounter(){
    this.counter = 0
  }
}
