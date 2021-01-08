import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareHouseRoutingModule } from './share-house-routing.module';
import { ShareHouseComponent } from './share-house.component';

@NgModule({
    declarations: [ShareHouseComponent],
    imports: [
        CommonModule,
        ShareHouseRoutingModule
    ]
})
export class ShareHouseModule { }