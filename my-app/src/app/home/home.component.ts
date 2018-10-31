import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  message = 'This is Message';

  persons: Person[] = [{
    name: 'Hello',
    age: 1
  },
  {
    name: 'loren',
    age: 11
  },
  {
    name: 'ShowTime',
    age: 12
  }];


  ngOnInit() {
  }

  addPerson(name: string, age: number) {
    this.persons.push({
      name,
      age
    });

  }

}
