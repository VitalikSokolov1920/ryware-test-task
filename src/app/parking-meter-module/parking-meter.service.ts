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
    new ParkingMeter(0, "город Москва, ул. Косиора, 78", false, 2),
    new ParkingMeter(1, "город Можайск, спуск Космонавтов, 09", true, 4),
    new ParkingMeter(2, "город Серебряные Пруды, проезд Славы, 60", true, 4),
    new ParkingMeter(3, "город Дорохово, пр. Сталина, 46", false, 45),
    new ParkingMeter(4, "город Раменское, проезд Косиора, 68", false, 2),
    new ParkingMeter(5, "город Шаховская, наб. Космонавтов, 59", true, 76),
    new ParkingMeter(6, "город Орехово-Зуево, пер. Косиора, 84", false, 48),
    new ParkingMeter(7, "город Кашира, наб. Гоголя, 30", true, 21),
    new ParkingMeter(8, "город Подольск, пл. Гагарина, 91", false, 2),
    new ParkingMeter(9, "город Раменское, спуск Балканская, 06", true, 8),
    new ParkingMeter(10, "город Орехово-Зуево, ул. Ладыгина, 18", false, 2),
    new ParkingMeter(11, "город Сергиев Посад, въезд Гагарина, 90", true, 4),
    new ParkingMeter(12, "город Мытищи, наб. Гоголя, 75", true, 4),
    new ParkingMeter(13, "город Озёры, проезд Будапештсткая, 34", false, 45),
    new ParkingMeter(14, "город Щёлково, пл. Ломоносова, 65", false, 2),
    new ParkingMeter(15, "город Павловский Посад, спуск Будапештсткая, 23", true, 76),
    new ParkingMeter(16, "город Мытищи, пр. Сталина, 24", false, 48),
    new ParkingMeter(17, "город Солнечногорск, проезд Балканская, 61", true, 21),
    new ParkingMeter(18, "город Люберцы, бульвар Славы, 02", false, 2),
    new ParkingMeter(19, "город Щёлково, пр. 1905 года, 19", true, 8),
    new ParkingMeter(20, "город Истра, пер. Ленина, 05", false, 2),
    new ParkingMeter(21, "город Талдом, пр. Чехова, 41", true, 4),
    new ParkingMeter(22, "город Мытищи, пер. Будапештсткая, 26", true, 4),
    new ParkingMeter(23, "город Зарайск, ул. Ленина, 70", false, 45),
    new ParkingMeter(24, "город Клин, бульвар Ладыгина, 23", false, 2),
    new ParkingMeter(25, "город Талдом, въезд Ломоносова, 88", true, 76),
    new ParkingMeter(26, "город Талдом, пр. Будапештсткая, 19", false, 48),
    new ParkingMeter(27, "город Раменское, наб. Домодедовская, 94", true, 21),
    new ParkingMeter(28, "город Истра, проезд Бухарестская, 27", false, 2),
    new ParkingMeter(29, "город Щёлково, шоссе Бухарестская, 00", true, 8)
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
