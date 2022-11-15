export class ParkingMeter {
  id: number;
  address: string;
  status: boolean;
  usages: number;
  disabled?: boolean = false;

  constructor(id: number, address: string, status: boolean, usages: number) {
    this.id = id;
    this.address = address;
    this.status = status;
    this.usages = usages;
  }
}
