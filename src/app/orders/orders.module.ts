import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';



@NgModule({
  declarations: [PageListOrdersComponent, PageAddOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    IconsModule
  ]
})
export class OrdersModule { }
