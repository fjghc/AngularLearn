import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-tree-select',
  templateUrl: './demo-tree-select.component.html',
  styleUrls: ['./demo-tree-select.component.css']
})
export class DemoTreeSelectComponent implements OnInit {
  expandKeys = [ '100', '1001' ];
  value: string[] = [];
  nodes = [{
    title: 'parent 1',
    key: '100',
    children: [{
      title: 'parent 1-0',
      key: '1001',
      children: [
        { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
        { title: 'leaf 1-0-1', key: '10011', isLeaf: true },
        { title: 'leaf 1-0-2', key: '10012', isLeaf: true }
      ]
    }, {
      title: 'parent 1-1',
      key: '1002',
      children: [
        { title: 'leaf 1-1-0', key: '10020', isLeaf: true }
      ]
    }]
  }];
  constructor() { }

  ngOnInit() {
  }

  onChange($event: string[]): void {
    console.log($event);
  }

}
