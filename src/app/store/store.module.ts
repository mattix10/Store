import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  exports: [StoreComponent]
})

export class StoreModule { }
