import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParkingMeterListComponent} from "./parking-meter-list/parking-meter-list.component";
import {ParkingMeterPageComponent} from "./parking-meter-page/parking-meter-page.component";

const routes: Routes = [
  {
    path: 'list',
    component: ParkingMeterListComponent,
  },
  {
    path: ':id',
    component: ParkingMeterPageComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ParkingMeterRoutingModule { }
