import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  // 英雄列表
  heroes: Hero[];
  // 构造器注入HeroService
  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getAllHeroes();
  }

  // 定义获取Heroes方法,
  // 该方法返回的是一个可观察对象，（异步操作）
  getAllHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


}
