import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 通过属性获取上级组件传递过来的hero
  // @Input 装饰器来让 hero 属性可以在外部的 HeroesComponent 中绑定。
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
