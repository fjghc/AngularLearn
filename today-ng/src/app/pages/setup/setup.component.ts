import { LocalStorageService } from './../../services/local-storage.service';

import { Component, OnInit } from '@angular/core';

import { USERNAME, INIT_FLAG, START_USING_DATE } from '../../services/local-storage.namespace';
import { getTodayTime } from '../../../utils/time';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.less']
})
export class SetupComponent implements OnInit {

  username: string;
  constructor(private store: LocalStorageService) { }

  ngOnInit() {
  }

  // 单击确定事件
  completeSetup(): void {
    this.store.set(INIT_FLAG, true);
    this.store.set(START_USING_DATE, getTodayTime());
    this.store.set(USERNAME, this.username);

  }
}
