import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-slider',
  templateUrl: './demo-slider.component.html',
  styleUrls: ['./demo-slider.component.css']
})
export class DemoSliderComponent implements OnInit {

  value1: 0;
  value2: 0;
  style = {
    float: 'left',
    height: '300px',
    marginLeft: '70px'
  };
  marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: '<strong>100°C</strong>',
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
