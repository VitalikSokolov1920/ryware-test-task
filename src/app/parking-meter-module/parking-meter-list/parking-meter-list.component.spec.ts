import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingMeterListComponent } from './parking-meter-list.component';

describe('ParkingMeterListComponent', () => {
  let component: ParkingMeterListComponent;
  let fixture: ComponentFixture<ParkingMeterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingMeterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingMeterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
