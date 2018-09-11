import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'step-by-step';
  values = '';
  values2 = '';
  onClickMe(): void {
    this.title = 'click me';
  }

  onKey(event: any): void {
    this.values += event.target.value + '|';
  }

  onKey2(value: string): void {
    this.values2 += value + '|';
  }
}
