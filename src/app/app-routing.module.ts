import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { ModelResolver } from './model/model.resolver';


const routes: Routes = [
  { path: 'store', component: StoreComponent, resolve: { model: ModelResolver}},
  { path: 'cart', component: CartDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'admin', loadChildren:  () => import('src/app/admin/admin.module').then(mod => mod.AdminModule)},
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
