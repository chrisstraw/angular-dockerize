import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  get isAuthenticated(): boolean {
    return true;
  }

  get username(): string | null {
    return 'Bogus User'
  }
}
