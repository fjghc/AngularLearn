import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
/* 引入Rxjs */
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

/* 添加英雄服务类，并将该服务注入到根,任何只组件都可以通过依赖注入拿到该服务 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  /*  模拟http，返回 可观察对象流 */
  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
