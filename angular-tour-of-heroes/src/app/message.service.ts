import { Injectable } from '@angular/core';

// 消息中心
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];
  constructor() { }

  // 添加一条消息
  add(message: string) {
    this.messages.push(message);
  }
  // 清楚所有消息
  clear(): void {
    this.messages = [];
  }
}
