import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingMeterListItemComponent } from './parking-meter-list-item.component';

describe('ParkingMeterListItemComponent', () => {
  let component: ParkingMeterListItemComponent;
  let fixture: ComponentFixture<ParkingMeterListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingMeterListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingMeterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
