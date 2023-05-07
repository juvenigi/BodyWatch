import {Injectable} from '@angular/core';
import {PersonMeasurement} from "../model/person-measurement.model";
import {UserService} from "./user.service";

enum ThresholdType {
  "MIN",
  "MAX",
}

type MeasurementFunction = (measurement: PersonMeasurement, measurementParams: PersonMeasurement) => boolean;

interface NotificationSubscription {
  userid: number,
  thresholdType: ThresholdType,
  measurementFilters: Array<[MeasurementFunction, PersonMeasurement]>
}

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  subscriptions: Array<NotificationSubscription> // where warnings are going to be stored

  constructor(
    private userService: UserService
  ) {
  }

  pushMeasurementToUser(userid: number, measurement: PersonMeasurement): boolean {
    let user = this.userService.getUser(userid);
    if (!user) return false;
    user.person.appendMeasurements(measurement);
    let isUpdated = this.userService.updateUser(user);
    return !isUpdated;
  }

  getNoticationsForUser(id: number): PersonMeasurement[] | undefined {
    let user = this.userService.getUser(id);
    return user?.person.measurements;
  }

  getNotificationForSubscription(userid: number): PersonMeasurement[] {
    let user = this.userService.getUser(userid);
    if (!user) return [] as PersonMeasurement [];
    let filter = this.subscriptions.find(value => value.userid === userid);
    if (!filter || filter.measurementFilters.length === 0) return [] as PersonMeasurement[];

    const filterfunction = (measurement: PersonMeasurement): boolean => {
      if (!filter) return false;
      for (let filterpair of filter.measurementFilters) {
        if (filterpair[0](measurement, filterpair[1])) return true;
      }
      return false;
    }

    return user.person.measurements.filter(filterfunction);
  }
}
