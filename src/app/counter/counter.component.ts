import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <h4> counter {{ counter }}</h4>
    <div class="buttons">
      <button class="button" (click)="increaseBy(-1)" > -1 </button>
      <button class="button" (click)="resetCounter()"> reset </button>
      <button class="button" (click)="increaseBy(+1)" > +1 </button>
    </div>
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
