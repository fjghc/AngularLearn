import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-sys-log',
  templateUrl: './log.component.html',
})
export class SysLogComponent implements OnInit {
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
    {
      title: '编号', index: 'no', type: 'checkbox',
      selections: [
        {
          text: '小于100次',
          select: (data: any[]) => data.forEach(item => item.checked = item.callNo <= 100),
        },
        {
          text: '大于200次',
          select: (data: any[]) => data.forEach(item => item.checked = item.callNo > 200),
        }
      ],
    },
    {
      title: '调用次数', type: 'number', index: 'callNo',
      sort: {
        compare: (a, b) => a.callNo - b.callNo,
      }
    },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    {
      title: '时间', type: 'date', index: 'updatedAt'
    },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];
  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}
