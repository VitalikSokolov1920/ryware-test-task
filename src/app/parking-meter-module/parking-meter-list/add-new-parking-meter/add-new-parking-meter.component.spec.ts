import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewParkingMeterComponent } from './add-new-parking-meter.component';

describe('AddNewParkingMeterComponent', () => {
  let component: AddNewParkingMeterComponent;
  let fixture: ComponentFixture<AddNewParkingMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewParkingMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewParkingMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
