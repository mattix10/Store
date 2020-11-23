import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { CartSummaryComponent } from './cartSummary/cartSummary.component';
import { CartDetailComponent } from './cartDetail/cartDetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material.module';
import { NavBarComponent } from './navbar/navbar.component';
import { ShowImageDirective } from '../model/showImage.directive';
import { ProductDetailComponent } from './productDetail/productDetail.component';
import { MainComponent } from './main/main.component';
import { NgbdCarouselBasicModule } from './advertisement/carousel-basic.module';
import { CartWindowComponent } from './cartWindow/cartWindow.component';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule, MaterialModule, NgbdCarouselBasicModule],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    FooterComponent,
    NavBarComponent,
    ShowImageDirective,
    ProductDetailComponent,
    MainComponent,
    CartWindowComponent
  ],
  exports: [MainComponent]
})

export class StoreModule { }
