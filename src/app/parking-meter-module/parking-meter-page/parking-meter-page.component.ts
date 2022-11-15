import { Component, OnInit } from '@angular/core';
import {ParkingMeter} from "../models/parking-meter";
import {ActivatedRoute, Router} from "@angular/router";
import {ParkingMeterService} from "../parking-meter.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-parking-meter-page',
  templateUrl: './parking-meter-page.component.html',
  styleUrls: ['./parking-meter-page.component.scss']
})
export class ParkingMeterPageComponent implements OnInit {

  parkingMeter: ParkingMeter;
  errorMessage: string = '';

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private parkingMeterService: ParkingMeterService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      const id = Number(map.get('id'));

      if (isNaN(id) || id < 0) {
        this.router.navigate(['/parking-meter/list']);
      }

      this.parkingMeterService.getParkingMeterById(id).subscribe(findParkingMeter => {
        if (findParkingMeter) {
          this.parkingMeter = findParkingMeter;
        }
      });
    });
  }

  getStatus(): string {
    return this.parkingMeter.status ? 'Is used' : 'Free';
  }

  changeDisabledStatus(): void {
    this.parkingMeterService.changeDisableStatus(this.parkingMeter);
  }

  changeStatus(): void {
    const change = this.parkingMeterService.changeParkingMeterStatus(this.parkingMeter);

    if (!change) {
      this.errorMessage = 'it is impossible to change the status, since this meter is disabled';
    } else {
      this.errorMessage = '';
    }
  }

  backToList(): void {
    this.location.back();
  }
}
