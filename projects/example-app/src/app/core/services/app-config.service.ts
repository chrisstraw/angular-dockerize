import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor() { }


  get applicationName(): string {
    return "Application Name Here";
  }

  get isProduction(): boolean {
    return false;
    // return environment.production === true;
  }

  get serverLoggingUrl(): string {
    return '/log';
  }
}
