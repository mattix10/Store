import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductTableComponent } from './tables/productTable.component';
import { ProductEditorComponent } from './productEditor/productEditor.component';
import { OrderTableComponent } from './tables/orderTable.component';
import { MaterialModule } from '../material.module';
import { SideNavComponent } from './sidenav/sidenav.component';
const routing = RouterModule.forChild([
  { path: 'main', component: AdminComponent,
    children: [
      { path: 'products/:mode/:id', component: ProductEditorComponent },
      { path: 'products/:mode', component: ProductEditorComponent },
      { path: 'products', component: ProductTableComponent },
      { path: 'orders', component: OrderTableComponent },
      { path: '**', redirectTo: 'orders' }
    ] },
  { path: '**', redirectTo: 'auth' }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing, MaterialModule],
  declarations: [ AdminComponent, ProductTableComponent,
    ProductEditorComponent, OrderTableComponent, SideNavComponent],
})
export class AdminModule {}