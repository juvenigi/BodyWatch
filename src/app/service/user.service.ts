import {Injectable} from '@angular/core';
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  repo: Array<User>;
  currentUser: User | undefined;

  constructor() {
  }

  getCurrentUser(){
    return this.currentUser;
  }

  createUser(user: User): User {
    let index = this.repo.length;
    user.id = index;
    this.repo.push(user);
    this.currentUser = user;
    return user;
  }

  updateUser(user: User): User | undefined {
    let foundUser = this.repo.at(user.id);
    if (!foundUser) return undefined;
    else {
      foundUser = user;
      return user;
    }
  }

  getUser(userid: number): User | undefined { //TODO
    return this.repo.at(userid);
  }
}
