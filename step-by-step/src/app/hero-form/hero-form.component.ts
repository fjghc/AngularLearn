import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(10, 'ddd', this.powers[0], 'Chuck Overstreet');
  summitted = false;

  constructor() { }

  ngOnInit() {
    // this.model = new Hero(10, 'ddd', this.powers[0], 'Chuck Overstreet');
  }

  onSubmit() { this.summitted = true; }

  newHero(): void {
    this.model = new Hero(42, '', '');
  }

}
