import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseDetailRoutingModule } from './house-detail-routing.module';
import { HouseDetailComponent } from './house-detail.component';
//import { HouseComponent } from '../house/house.component';

@NgModule({
    declarations: [
        HouseDetailComponent,
        //HouseComponent
    ],
    imports: [
        CommonModule,
        HouseDetailRoutingModule
    ]
})
export class HouseDetailModule { }