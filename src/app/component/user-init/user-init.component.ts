import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../../model/person.model";
import {PersonMeasurement} from "../../model/person-measurement.model";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-init',
  templateUrl: './user-init.component.html',
  styleUrls: ['./user-init.component.css']
})
export class UserInitComponent implements OnInit {
  user: User | undefined;
  greeting: string
  triedToSubmit = false;
  userInitForm: FormGroup;

  constructor(
    private usersService: UserService
  ) {
  }

  ngOnInit() {
    this.user = this.usersService.getCurrentUser();
    if (!this.user) {
      this.initForm();
    }
  }

  greet(): string {
    return !this.user
      ? 'Hallo, unbekannt'
      : this.greeting = 'Hallo, ' + this.user.person.firstName + ' ' + this.user.person.lastName;
  }

  createNewUser() {
    console.log(this.userInitForm.valid);
    console.log(this.userInitForm);
    console.log(this.userInitForm.value);
    if (this.userInitForm.valid) {
      let values = this.userInitForm.value;
      let firstMeasurement: PersonMeasurement = {
        weight: values.weight as number, // FIXME weird bug
        height: values.height as number,
        entryDate: new Date()
      }
      let person = new Person(values.firstname, values.lastname, values.birthdate);
      person.appendMeasurements(firstMeasurement);
      this.user = new User(values.username, person);
    } else {
      this.triedToSubmit = true;
    }
  }

  private initForm() {
    let opts = {nonNullable: true, validators: [Validators.required]}
    let optsMin = {nonNullable: true, validators: [Validators.required, Validators.min(0)]}
    this.userInitForm = new FormGroup({
      username: new FormControl<string>('mmuster23@example.com', opts),
      password: new FormControl<string>(''), //FIXME possibly
      firstname: new FormControl<string>('Max', opts),
      lastname: new FormControl<string>('Mustermann', opts),
      birthdate: new FormControl<Date>(new Date(), opts),
      height: new FormControl<number>(192, optsMin),
      weight: new FormControl<number>(50.9, optsMin)
    });
  }
}
