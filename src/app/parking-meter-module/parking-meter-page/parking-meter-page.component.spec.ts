import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingMeterPageComponent } from './parking-meter-page.component';

describe('ParkingMeterPageComponent', () => {
  let component: ParkingMeterPageComponent;
  let fixture: ComponentFixture<ParkingMeterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingMeterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingMeterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
