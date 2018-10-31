import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

/*
 给app添加路由模块 ng g m app-routing --flat --module=app
 移除自动生成的
  1 imports: [
    CommonModule
   ],
   declarations: []

  2 添加 import { RouterModule, Routes } from '@angular/router';
  3 定义路由
  4 将自己的路由注入到RouterModule.forRoot(routes)

*/
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
