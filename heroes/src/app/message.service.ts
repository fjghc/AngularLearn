import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() { }

  /* 添加一条消息 */
  add(message: string): void {
    this.messages.push(message);
  }
  clear(): void {
    this.messages = [];
  }
}
