import {Component, Input} from '@angular/core';
import {ParkingMeter} from "../../models/parking-meter";

@Component({
  selector: 'app-parking-meter-list-item',
  templateUrl: './parking-meter-list-item.component.html',
  styleUrls: ['./parking-meter-list-item.component.scss']
})
export class ParkingMeterListItemComponent {

  @Input()
  parkingMeter: ParkingMeter;
}
