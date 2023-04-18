import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductItemComponent } from './product-item/product-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertsComponent,
        ProductDetailsComponent,
        CartComponent,
        ShippingComponent,
        ProductItemComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot([
            // {path: '',component: AppComponent},
            // {path: '', component: ProductListComponent},
            {path: 'products/:productId', component: ProductDetailsComponent},
            {path: 'cart', component: CartComponent},
            {path: 'shipping', component: ShippingComponent},
            {path: 'items/:categoryId',component: ProductItemComponent},
            // {path: 'categories', component: AppComponent}
        ]),
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        TopBarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
