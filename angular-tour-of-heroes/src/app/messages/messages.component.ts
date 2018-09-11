import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // 由于页面需要使用 messageService，所以为Public类型
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }
}
