import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { USERNAME } from '../../../services/local-storage.namespace';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.less']
})
export class LeftControlComponent implements OnInit {
  username: string;
  @Input() isCollapsed: boolean;
  @ViewChild(ListComponent) listComponent: ListComponent;
  constructor(
    private store: LocalStorageService
  ) { }

  ngOnInit() {
    this.username = this.store.get(USERNAME);
  }

  openAddListModal(): void {
    // 在Angular中调用子组件
    this.listComponent.openAddListModal();
  }

}
