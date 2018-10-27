import { Person } from './models/Person';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'My Frist App';
  me: Person = {
    name: 'Crashol',
    age: 12
  };


}
