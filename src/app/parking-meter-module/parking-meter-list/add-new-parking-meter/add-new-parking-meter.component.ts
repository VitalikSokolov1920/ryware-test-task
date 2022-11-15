import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ParkingMeter} from "../../models/parking-meter";
import {ParkingMeterService} from "../../parking-meter.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-new-parking-meter',
  templateUrl: './add-new-parking-meter.component.html',
  styleUrls: ['./add-new-parking-meter.component.scss']
})
export class AddNewParkingMeterComponent implements OnInit {
  formGroup: FormGroup;
  errorMessage: string;

  @Output('created')
  private newParkingMeter = new EventEmitter<ParkingMeter>();

  constructor(
    private parkingMeterService: ParkingMeterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      address: this.formBuilder.control('', [Validators.required]),
      status: this.formBuilder.control(false),
      usages: this.formBuilder.control(0),
    });
  }

  createParkingMeter() {
    if (this.formGroup.invalid) {
      return;
    } else {
      const address: string = this.formGroup.controls.address.value;

      const addressPaths: string[] = address.split(',');

      if (addressPaths.length < 3) {
        this.errorMessage = 'the address should have the following format: city, street, house number';
        return;
      }

      for (let i = 0; i < 3; i++) {
        if (addressPaths[i].trim() === '') {
          this.errorMessage = 'the address should have the following format: city, street, house number';
          return;
        }
      }

      const parkingMeter : ParkingMeter = {
        address,
        status: this.formGroup.controls.status.value,
        usages: this.formGroup.controls.usages.value
      } as ParkingMeter;

      this.errorMessage = '';

      this.newParkingMeter.emit(parkingMeter);

      this.formGroup.reset({usages: 0}, {emitEvent: false});
    }
  }
}
