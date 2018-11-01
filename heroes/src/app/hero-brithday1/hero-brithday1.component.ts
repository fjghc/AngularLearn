import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-brithday1',
  templateUrl: './hero-brithday1.component.html',
  styleUrls: ['./hero-brithday1.component.css']
})
export class HeroBrithday1Component implements OnInit {


  brithday = new Date(1988, 3, 12);
  togger = true;
  constructor() { }

  ngOnInit() {
  }

  get format() {
    return this.togger ? 'shortDate' : 'fullDate';
  }

  toggerFormat() {
    this.togger = !this.togger;
  }

}
