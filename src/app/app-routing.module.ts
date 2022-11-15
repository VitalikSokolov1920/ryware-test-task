import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'parking-meter',
    loadChildren: () => import('./parking-meter-module/parking-meter.module').then(m => m.ParkingMeterModule)
  },
  {
    path: '**',
    redirectTo: 'parking-meter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
