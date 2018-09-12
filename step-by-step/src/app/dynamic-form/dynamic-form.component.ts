import { Component, OnInit, Input } from '@angular/core';
import { QuestionControlService } from '../question-control.service';
import { QuestionBase } from '../models/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private qsc: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qsc.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
