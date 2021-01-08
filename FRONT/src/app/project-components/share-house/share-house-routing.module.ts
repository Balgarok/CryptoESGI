import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareHouseComponent } from './share-house.component';

const routes: Routes = [
    {
        path: '',
        component: ShareHouseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShareHouseRoutingModule { }