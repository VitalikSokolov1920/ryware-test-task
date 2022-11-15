import { Component, OnInit } from '@angular/core';
import {ParkingMeter} from "../models/parking-meter";
import {ParkingMeterService} from "../parking-meter.service";

@Component({
  selector: 'app-parking-meter-list',
  templateUrl: './parking-meter-list.component.html',
  styleUrls: ['./parking-meter-list.component.scss']
})
export class ParkingMeterListComponent implements OnInit {

  parkingMeterList: ParkingMeter[] = [];

  constructor(private parkingMeterService: ParkingMeterService) {}

  addNewParkingMeter(parkingMeter: ParkingMeter) {
    this.parkingMeterService.addParkingMeter(parkingMeter);
  }

  ngOnInit(): void {
    this.parkingMeterService.getParkingMeterList().subscribe(list => {
      this.parkingMeterList = list;

      this.parkingMeterList.sort((a,b) => {
        if (a.address === b.address) {
          return 0;
        } else if (a.address > b.address) {
          return 1;
        } else {
          return -1;
        }
      });
    });
  }

}
