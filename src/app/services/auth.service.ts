import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn = false;

  checkLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
