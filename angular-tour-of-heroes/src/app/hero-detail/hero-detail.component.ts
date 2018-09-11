import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 接收从父组件传递过来的值
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
