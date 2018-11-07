import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { TradeListEditComponent } from './edit/edit.component';
import { TradeListViewComponent } from './view/view.component';

@Component({
  selector: 'app-trade-list',
  templateUrl: './list.component.html',
})
export class TradeListComponent implements OnInit {
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };

  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        { text: '查看', click: (item: any) => this.view(item) },
        { text: '编辑', type: 'modal', component: TradeListEditComponent, click: 'reload' }
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {
    this.modal
      .createStatic(TradeListEditComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

  view(item: any) {
    this.modal.createStatic(TradeListViewComponent, item)
              .subscribe(() => this.st.reload());
  }

}
