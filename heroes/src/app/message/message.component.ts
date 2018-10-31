import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  /* 注入Message服务，必须为public，Html页面才能使用 */
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
