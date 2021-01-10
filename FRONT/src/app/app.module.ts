import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './framework-components/header/header.component';
import { FooterComponent } from './framework-components/footer/footer.component';
//import { HomeComponent } from './project-components/home/home.component';
//import { ShareHouseComponent } from './project-components/share-house/share-house.component';
import { FourOhFourComponent } from './framework-components/four-oh-four/four-oh-four.component';
import { HouseDetailComponent } from './project-components/house-detail/house-detail.component';
//import { HouseComponent } from './project-components/house/house.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    //HomeComponent,
    //ShareHouseComponent,
    FourOhFourComponent,
    HouseDetailComponent,
    //HouseComponent
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
