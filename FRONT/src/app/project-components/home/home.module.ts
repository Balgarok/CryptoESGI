import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HouseComponent } from '../house/house.component';

@NgModule({
    declarations: [
        HomeComponent,
        HouseComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }