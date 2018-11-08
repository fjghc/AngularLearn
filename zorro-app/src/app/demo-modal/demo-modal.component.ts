import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.css']
})
export class DemoModalComponent implements OnInit {

  visiable = false;
  visiable2 = false;
  constructor(private message: NzMessageService) { }

  ngOnInit() {

  }
  showModal(): void {
    this.visiable = true;
  }
  showModal2(): void {
    this.visiable2 = true;
  }

  handleOk(): void {
    console.log('Ok Click');
    this.message.success('Ok Click');
    this.visiable = false;
  }

  handleCancel(): void {
    console.log('Cancel Click');
    this.message.warning('Cancel Click');
    this.visiable = false;
  }

  handleOk2(): void {
    console.log('Ok Click');
    this.message.success('Ok Click');
    this.visiable2 = false;

  }

  handleCancel2(): void {
    console.log('Cancel Click');
    this.message.warning('Cancel Click');
    this.visiable2 = false;
  }


}
