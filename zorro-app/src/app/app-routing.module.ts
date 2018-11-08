import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoTreeSelectComponent } from './demo-tree-select/demo-tree-select.component';
import { DemoCascaderComponent } from './demo-cascader/demo-cascader.component';
import { DemoSliderComponent } from './demo-slider/demo-slider.component';
import { DemoSwitchComponent } from './demo-switch/demo-switch.component';
import { DemoTreeComponent } from './demo-tree/demo-tree.component';
import { DemoMessageComponent } from './demo-message/demo-message.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';

const routes: Routes = [
  { path: 'button', component: DemoButtonComponent },
  { path: 'treeselect', component: DemoTreeSelectComponent },
  { path: 'cascader', component: DemoCascaderComponent },
  { path: 'slider', component: DemoSliderComponent },
  { path: 'switch', component: DemoSwitchComponent },
  { path: 'tree', component: DemoTreeComponent },
  { path: 'message', component: DemoMessageComponent },
  { path: 'modal', component: DemoModalComponent },
  { path: '', redirectTo: 'button', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  declarations: []
})
export class AppRoutingModule { }
