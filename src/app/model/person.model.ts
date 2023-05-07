import {PersonMeasurement} from "./person-measurement.model";

export class Person {
  firstName: string;
  lastName: string;
  birthdate: Date;
  measurements = [] as Array<PersonMeasurement>;

  constructor(firstname: string, lastname: string, birthdate: Date) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.birthdate = birthdate;
  }

  appendMeasurements(measurement: PersonMeasurement) {
    this.measurements.push(measurement);
  }

  getAllMeasurements() {
    return this.measurements;
  }

  collectMeasurements(date: Date): [Date, PersonMeasurement] {
    let measurementToFill: PersonMeasurement = {
      bloodPressure: undefined,
      heartRate: undefined,
      temperature: undefined,
      weight: undefined,
      height: undefined,
      entryDate: new Date(),
    };

    // better to not do this in the frontend
    // let searchlist = this.measurements.filter(measurement => measurement.entryDate < date).reverse();
    // for (let measurement of searchlist) {
    //   Object.keys(measurementToFill).forEach((key) => {
    //     let typeoff = measurementToFill as any;
    //     if (!typeoff[key]) typeoff[key] = (measurement as any)[key]
    //
    //   });
    //   let allFilled = true
    //   for (let k in measurement) {
    //     if (!k) allFilled = false;
    //   }
    //   if (allFilled) break;
    // }
    return [date, measurementToFill]; //TODO
  }

  clearMeasurements() {
    this.measurements = [] as Array<PersonMeasurement>;
  }
}
