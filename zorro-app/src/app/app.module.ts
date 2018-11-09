import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { RouterModule } from '@angular/router';
import { DemoTreeSelectComponent } from './demo-tree-select/demo-tree-select.component';
import { DemoCascaderComponent } from './demo-cascader/demo-cascader.component';
import { DemoSliderComponent } from './demo-slider/demo-slider.component';
import { DemoSwitchComponent } from './demo-switch/demo-switch.component';
import { DemoTreeComponent } from './demo-tree/demo-tree.component';
import { DemoMessageComponent } from './demo-message/demo-message.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { DemoTabComponent } from './demo-tab/demo-tab.component';



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    DemoButtonComponent,
    DemoTreeSelectComponent,
    DemoCascaderComponent,
    DemoSliderComponent,
    DemoSwitchComponent,
    DemoTreeComponent,
    DemoMessageComponent,
    DemoModalComponent,
    DemoTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
