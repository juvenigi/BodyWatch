import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeasurementHistoryComponent } from './user-measurement-history.component';

describe('UserMeasurementHistoryComponent', () => {
  let component: UserMeasurementHistoryComponent;
  let fixture: ComponentFixture<UserMeasurementHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMeasurementHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMeasurementHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
