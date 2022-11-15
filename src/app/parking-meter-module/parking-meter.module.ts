import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingMeterRoutingModule } from './parking-meter-routing.module';
import { ParkingMeterListComponent } from './parking-meter-list/parking-meter-list.component';
import { ParkingMeterPageComponent } from './parking-meter-page/parking-meter-page.component';
import { ParkingMeterListItemComponent } from './parking-meter-list/parking-meter-list-item/parking-meter-list-item.component';
import { AddNewParkingMeterComponent } from './parking-meter-list/add-new-parking-meter/add-new-parking-meter.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ParkingMeterListComponent,
    ParkingMeterPageComponent,
    ParkingMeterListItemComponent,
    AddNewParkingMeterComponent
  ],
    imports: [
        CommonModule,
        ParkingMeterRoutingModule,
        ReactiveFormsModule
    ]
})
export class ParkingMeterModule { }
