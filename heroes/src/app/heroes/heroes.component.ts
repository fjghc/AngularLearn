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
  selectHero: Hero;
  // 依赖注入 HeroService
  constructor(private heroSerivce: HeroService) {

  }
  ngOnInit() {
    // 页面生命周期中调用
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroSerivce.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }

}
