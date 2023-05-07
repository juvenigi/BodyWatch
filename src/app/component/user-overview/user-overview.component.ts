import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {PersonMeasurement} from "../../model/person-measurement.model";

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {
  user: User;

  constructor() {
  }

  ngOnInit() {
    // this.user = new User('max', 'max', 'mustermann');
    // let sampleMeasurement: PersonMeasurement = {bloodPressure: 0, height: 0, weight: 0, entryDate: new Date()};
    // this.user.person.appendMeasurements(sampleMeasurement);
  }
}
