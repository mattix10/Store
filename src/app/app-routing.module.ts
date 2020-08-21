import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { ProductDetailComponent } from './store/productDetail.component';
import { ModelResolver } from './model/model.resolver';
import { MainComponent } from './store/main.component';


const childRoutes: Routes = [
  
  { path: 'product/:id', component: ProductDetailComponent, resolve: {model: ModelResolver}},
  { path: 'cart', component: CartDetailComponent },
  { path: 'category/:category', component: StoreComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component: StoreComponent},
];
const routes: Routes = [
  { path: 'admin', loadChildren:  () => import('src/app/admin/admin.module').then(mod => mod.AdminModule)},
  { path: 'store', component: MainComponent, children: childRoutes },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
