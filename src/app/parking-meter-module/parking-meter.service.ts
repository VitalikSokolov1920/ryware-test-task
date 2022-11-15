import {forwardRef, Injectable} from "@angular/core";
import {ParkingMeterModule} from "./parking-meter.module";
import {Observable, of} from "rxjs";
import {ParkingMeter} from "./models/parking-meter";

@Injectable({
  providedIn: forwardRef(() => ParkingMeterModule)
})
export class ParkingMeterService {
  private static olderId = 30;

  constructor() {}

  private parkingMeterListMock: ParkingMeter[] = [
    new ParkingMeter(0, "BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1BAddress1", false, 2),
    new ParkingMeter(1, "Address2", true, 4),
    new ParkingMeter(2, "Address3", true, 4),
    new ParkingMeter(3, "BAddress4", false, 45),
    new ParkingMeter(4, "CAddress5", false, 2),
    new ParkingMeter(5, "DAddress6", true, 76),
    new ParkingMeter(6, "BAddress7", false, 48),
    new ParkingMeter(7, "Address8", true, 21),
    new ParkingMeter(8, "CAddress9", false, 2),
    new ParkingMeter(9, "Address10Address10 Address10Address10Address10 Address10", true, 8),
    new ParkingMeter(10, "BAddress1", false, 2),
    new ParkingMeter(11, "Address2", true, 4),
    new ParkingMeter(12, "Address3", true, 4),
    new ParkingMeter(13, "BAddress4", false, 45),
    new ParkingMeter(14, "CAddress5", false, 2),
    new ParkingMeter(15, "DAddress6", true, 76),
    new ParkingMeter(16, "BAddress7", false, 48),
    new ParkingMeter(17, "Address8", true, 21),
    new ParkingMeter(18, "CAddress9", false, 2),
    new ParkingMeter(19, "Address10", true, 8),
    new ParkingMeter(20, "BAddress1", false, 2),
    new ParkingMeter(21, "Address2", true, 4),
    new ParkingMeter(22, "Address3", true, 4),
    new ParkingMeter(23, "BAddress4", false, 45),
    new ParkingMeter(24, "CAddress5", false, 2),
    new ParkingMeter(25, "DAddress6,DAddress6,DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6DAddress6", true, 76),
    new ParkingMeter(26, "BAddress7", false, 48),
    new ParkingMeter(27, "Address8", true, 21),
    new ParkingMeter(28, "CAddress9", false, 2),
    new ParkingMeter(29, "Address10", true, 8)
  ]

  getParkingMeterList() : Observable<ParkingMeter[]> {
    return of(this.parkingMeterListMock);
  }

  getParkingMeterById(id: number) : Observable<ParkingMeter | undefined> {
    return of(this.parkingMeterListMock.find(p => p.id === id));
  }

  addParkingMeter(parkingMeter: ParkingMeter): void {
    parkingMeter.id = ParkingMeterService.olderId++;

    this.parkingMeterListMock.push(parkingMeter);
  }

  changeParkingMeterStatus(parkingMeter: ParkingMeter): boolean {
    if (parkingMeter.disabled) {
      return false;
    }

    parkingMeter.status = !parkingMeter.status;

    return true;
  }

  changeDisableStatus(parkingMeter: ParkingMeter) {
    parkingMeter.disabled = !parkingMeter.disabled;
  }
}
