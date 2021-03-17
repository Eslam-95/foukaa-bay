import { FieldErrorModule } from './field-error/field-error.module';
import { HomeArComponent } from './home-ar/home-ar.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeEnComponent,
    HomeArComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FieldErrorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
