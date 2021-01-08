import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourOhFourComponent } from './framework-components/four-oh-four/four-oh-four.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'home'},
  {path: 'home', loadChildren:() => import('./project-components/home/home.module').then(m => m.HomeModule)},
  {path: 'share-house', loadChildren:() => import('./project-components/share-house/share-house.module').then(m => m.ShareHouseModule)},
  {path: '**', component: FourOhFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
