import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // 依赖注入 HeroService
  constructor(private heroSerivce: HeroService) {

  }
  ngOnInit() {
    // 页面生命周期中调用
    this.getHeroes();
  }

  getHeroes(): void {
    /* 返回可观测对象 ,异步返回*/
    this.heroSerivce.getHeros()
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroSerivce.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(b => b !== hero);
    this.heroSerivce.deleteHero(hero).subscribe();
  }

}
