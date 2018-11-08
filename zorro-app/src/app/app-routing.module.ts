import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoTreeSelectComponent } from './demo-tree-select/demo-tree-select.component';
import { DemoCascaderComponent } from './demo-cascader/demo-cascader.component';
import { DemoSliderComponent } from './demo-slider/demo-slider.component';

const routes: Routes = [
  { path: 'button', component: DemoButtonComponent },
  { path: 'treeselect', component: DemoTreeSelectComponent },
  { path: 'cascader', component: DemoCascaderComponent },
  { path: 'slider', component: DemoSliderComponent },
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
