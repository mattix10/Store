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


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule, MaterialModule],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    FooterComponent,
    NavBarComponent
  ],
  exports: [StoreComponent]
})

export class StoreModule { }
