import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

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
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  /* 默认路由 */
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
