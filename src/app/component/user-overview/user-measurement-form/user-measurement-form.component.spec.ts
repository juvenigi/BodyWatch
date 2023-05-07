import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeasurementFormComponent } from './user-measurement-form.component';

describe('UserMeasurementFormComponent', () => {
  let component: UserMeasurementFormComponent;
  let fixture: ComponentFixture<UserMeasurementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMeasurementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMeasurementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
