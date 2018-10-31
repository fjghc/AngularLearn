import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/* 添加英雄服务类，并将该服务注入到根,任何只组件都可以通过依赖注入拿到该服务 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros(): Hero[] {
    return HEROES;
  }
}
