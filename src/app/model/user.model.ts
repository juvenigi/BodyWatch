import {Person} from "./person.model";
import {SecurityUtil} from "../util/security-util";

export class User {
  id: number;
  username: string;
  password: string | undefined; //TODO password hashing
  person: Person;

  constructor(username: string, person : Person, password: string | undefined=undefined) {
    this.username = username;
    this.person = person;
    if (typeof password === 'string') {
      this.password = SecurityUtil.getPasswordHash(password);
    }
  }
}
