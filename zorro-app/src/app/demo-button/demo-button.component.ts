import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.css']
})
export class DemoButtonComponent implements OnInit {

  size: string;
  isloading = false;
  constructor() { }

  ngOnInit() {
  }

  loading(): void {
    this.isloading = true;
    setTimeout(() => {
      this.isloading = false;
    }, 2000);
  }

}
