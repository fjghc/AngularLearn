import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradeRoutingModule } from './trade-routing.module';
import { TradeListComponent } from './list/list.component';
import { TradeListEditComponent } from './list/edit/edit.component';
import { TradeListViewComponent } from './list/view/view.component';

const COMPONENTS = [
  TradeListComponent];
const COMPONENTS_NOROUNT = [
  TradeListEditComponent,
  TradeListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    TradeRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class TradeModule { }
