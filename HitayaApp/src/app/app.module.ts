import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { Itr1Component } from './itr1/itr1.component';
import { Itr2Component } from './itr2/itr2.component';
import { Itr3Component } from './itr3/itr3.component';
import { Itr4Component } from './itr4/itr4.component';
import { Itr5Component } from './itr5/itr5.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    RegistrationComponent,
    CommonLayoutComponent,
    FooterComponent,
    LoginComponent,
    Itr1Component,
    Itr2Component,
    Itr3Component,
    Itr4Component,
    Itr5Component,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
