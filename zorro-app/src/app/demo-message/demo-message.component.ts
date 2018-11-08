import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo-message',
  templateUrl: './demo-message.component.html',
  styleUrls: ['./demo-message.component.css']
})
export class DemoMessageComponent implements OnInit {

  constructor(public message: NzMessageService) { }
  ngOnInit() {
  }

  createMessage(type: string, message: string): void {
    this.message.create(type, `This Message${message}`);
  }



}
