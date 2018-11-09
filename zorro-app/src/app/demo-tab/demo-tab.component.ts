import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-tab',
  templateUrl: './demo-tab.component.html',
  styleUrls: ['./demo-tab.component.css']
})
export class DemoTabComponent implements OnInit {

  tabs = [{
    active: true,
    name: 'Tab 1',
    icon: 'edit'
  }, {
    active: false,
    name: 'Tab 2',
    icon: 'delete'
  }
  ];
  constructor() { }

  ngOnInit() {
  }
  closeTab(tab): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

}
