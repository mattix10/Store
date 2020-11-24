import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { CartDetailComponent } from './store/cartDetail/cartDetail.component';
import { ProductDetailComponent } from './store/productDetail/productDetail.component';
import { ModelResolver } from './model/model.resolver';
import { MainComponent } from './store/main/main.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guard/auth.guard';

const childRoutes: Routes = [
  
  { path: 'product/:id', component: ProductDetailComponent, resolve: {model: ModelResolver}},
  { path: 'cart', component: CartDetailComponent },
  { path: 'category/:category', component: StoreComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component: StoreComponent},
];
const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'admin', loadChildren:  () => import('src/app/admin/admin.module').then(mod => mod.AdminModule), canActivate: [AuthGuard]},
  { path: 'store', component: MainComponent, children: childRoutes },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
