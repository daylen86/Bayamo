import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvioncitoComponent } from './avioncito/avioncito.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RuedaComponent } from './rueda/rueda.component';

@NgModule({
  declarations: [
    AppComponent,
    AvioncitoComponent,
    CarritoComponent,
    RuedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
