import {PersonMeasurement} from "../model/person-measurement.model";

export class MeasurementRepository {

  measurements: Array<PersonMeasurement>

  constructor(firstMeasurement?: PersonMeasurement) {

    if (firstMeasurement) this.measurements = [firstMeasurement];
    else this.measurements = [];
  }

}
