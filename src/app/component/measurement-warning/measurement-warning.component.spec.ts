import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementWarningComponent } from './measurement-warning.component';

describe('MeasurementWarningComponent', () => {
  let component: MeasurementWarningComponent;
  let fixture: ComponentFixture<MeasurementWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
