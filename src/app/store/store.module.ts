import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { MaterialModule } from '../material.module';
import { NavBarComponent } from './navbar.component';
import { ShowImageDirective } from '../model/showImage.directive';
import { ProductDetailComponent } from './productDetail.component';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule, MaterialModule],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    FooterComponent,
    NavBarComponent,
    ShowImageDirective,
    ProductDetailComponent
  ],
  exports: [StoreComponent]
})

export class StoreModule { }
