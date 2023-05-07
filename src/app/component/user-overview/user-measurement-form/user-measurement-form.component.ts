import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {interval, map, shareReplay, Subject, takeUntil} from "rxjs";
import {User} from "../../../model/user.model";
import {UserService} from "../../../service/user.service";
import {PersonMeasurement} from "../../../model/person-measurement.model";

@Component({
  selector: 'app-user-measurement-form',
  templateUrl: './user-measurement-form.component.html',
  styleUrls: ['./user-measurement-form.component.css']
})
export class UserMeasurementFormComponent implements OnInit {
  user: User | undefined;
  //TODO refactor
  measurement: PersonMeasurement = {
    entryDate: new Date(),
    height: 0,
    weight: 0,
    temperature: 0,
    heartRate: 0,
    bloodPressure: 0
  };
  destroy: Subject<void> = new Subject();
  measurementForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.user = this.userService.currentUser;
    this.initializeForm();
    this.startTimer();
  }

  startTimer() {
    const timer = interval(1000).pipe(
      takeUntil(this.destroy),
      map(() => new Date()),
      shareReplay()
    );
    timer.subscribe(next => this.measurementForm.controls['entryDate'].setValue(next))
  }

  assertString(input: any): string {
    return (typeof input === 'string') ? input : input.toString();
  }

  initializeForm() {
    this.measurementForm = this.formBuilder.group(this.measurement);
    this.measurementForm.addValidators(Validators.required);
    this.measurementForm.controls['entryDate'].disable();

    // this.measurementForm = this.formBuilder.group({
    //   bloodPressure: new FormControl<number>(this.measurement?.bloodPressure, Validators.required),
    //   height: new FormControl<number>(this.measurement?.height, Validators.required),
    //   weight: new FormControl<number>(this.measurement?.entrydate, Validators.required),
    //   entrydate: new FormControl<Date>(new Date(), Validators.required)
    //})
  }

  onSubmit() {
    this.measurementForm.enable();
    console.log(this.measurementForm.value);
    this.measurementForm.controls['entryDate'].disable();
    this.initializeForm();
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
