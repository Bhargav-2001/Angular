import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { ServiceBoxComponent } from './service-box/service-box.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ServiceBoxComponent,
    HomeComponent,
    HttpClient
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
