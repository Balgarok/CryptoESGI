import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareHouseRoutingModule } from './share-house-routing.module';
import { ShareHouseComponent } from './share-house.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ShareHouseComponent],
    imports: [
        CommonModule,
        ShareHouseRoutingModule,
        ReactiveFormsModule
    ]
})
export class ShareHouseModule { }