import { NetserviceService } from './netservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbdCarouselConfig } from './images/images.component';
//import { NgImageSliderModule } from 'ng-image-slider';
import {HttpClientModule} from '@angular/common/http';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';

import { ShowpageComponent } from './showpage/showpage.component';

import { HeaderComponent } from './header/header.component';

import { CartComponent } from './cart/cart.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { CamerasComponent } from './cameras/cameras.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgbdCarouselConfig,
    LeftpanelComponent,
    ShowpageComponent,
    HeaderComponent,
  
    CartComponent,
  
    MobilesComponent,
  
    LaptopsComponent,
  
    CamerasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
   
    HttpClientModule,
   
  ],
  providers: [NetserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
