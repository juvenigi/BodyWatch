import {Component, OnInit} from '@angular/core';
import {User} from "./model/user.model";
import {Observable} from "rxjs";
import {PersonMeasurement} from "./model/person-measurement.model";
import {UserService} from "./service/user.service";
import {MeasurementService} from "./service/measurement.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BodyWatch';
  currentUser: User | undefined;


  constructor(
    private usersService: UserService,
    private measurementService: MeasurementService
  ) {
  }

  ngOnInit() {
  }


}
