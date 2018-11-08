import { Component, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo-tree',
  templateUrl: './demo-tree.component.html',
  styleUrls: ['./demo-tree.component.css']
})
export class DemoTreeComponent implements OnInit {

  @ViewChild('treeCom') treeCom;
  searchValue;

  nodes = [{
    title: '0-0',
    key: '0-0',
    children: [{
      title: '0-0-0',
      key: '0-0-0',
      children: [
        { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
        { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
        { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
      ]
    }, {
      title: '0-0-1',
      key: '0-0-1',
      children: [
        { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
        { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
        { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
      ]
    }, {
      title: '0-0-2',
      key: '0-0-2',
      isLeaf: true
    }]
  }, {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
      { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
      { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
    ]
  }, {
    title: '0-2',
    key: '0-2',
    isLeaf: true
  }];


  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event, this.treeCom.getMatchedNodeList().map(v => v.title));
  }
  constructor() { }

  ngOnInit() {
  }

}
