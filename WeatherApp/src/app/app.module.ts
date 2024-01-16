import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherpageComponent } from './weatherpage/weatherpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent, 
    WeatherpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,HttpClientModule
  ],
    
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
