import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductCardComponent } from 'src/features/product/components/product-card/product-card.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
