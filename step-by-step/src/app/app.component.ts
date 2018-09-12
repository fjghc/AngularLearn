import { Component } from '@angular/core';
import { QuestionServiceService } from './question-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(service: QuestionServiceService) {
    this.questions = service.getQuestions();
  }

  title = 'step-by-step';
  values = '';
  values2 = '';

  questions: any[];
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
