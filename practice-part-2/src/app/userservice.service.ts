import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  
  private users = [
    { id: 1, name: 'Mohammad Fuzel', email: 'mohammad@gmail.com' },
    { id: 2, name: 'Shanks', email: 'shanks@gmail.com' },
    { id: 3, name: 'Monkey D Luffy', email: 'luffy@gmail.com' }
  ];

  constructor() {}

  
  getUser() {
    return this.users;
  }
}
