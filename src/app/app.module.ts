import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component'; 
import { FormRenderningComponent } from './pages/form-renderning/form-renderning.component'; 
import { HttpClientModule } from '@angular/common/http';
import { GameControlComponent } from './pages/game-control/game-control.component';
import { EvenComponent } from './pages/even/even.component';
import { OddComponent } from './pages/odd/odd.component';
import { DebtComponent } from './pages/debt/debt.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './pages/customer/customer.component';
import { DebtCustomerComponent } from './pages/debt-customer/debt-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent, 
    FormRenderningComponent, GameControlComponent, EvenComponent, OddComponent, DebtComponent, CustomerComponent, DebtCustomerComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
