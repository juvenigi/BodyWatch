import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeasurementChartsComponent } from './user-measurement-charts.component';

describe('UserMeasurementChartsComponent', () => {
  let component: UserMeasurementChartsComponent;
  let fixture: ComponentFixture<UserMeasurementChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMeasurementChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMeasurementChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
