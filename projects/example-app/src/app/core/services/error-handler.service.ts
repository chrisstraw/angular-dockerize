import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import * as StackTraceParser from 'error-stack-parser';
import { AppConfigService } from './app-config.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export interface IAppError {
  name: string;
  appId: string;
  user: string;
  time: number;
  id: string;
  url: string;
  status: string;
  message: string;
  stack: string | StackTraceParser.StackFrame[] | null;
}

export interface IGrowlMessage {
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    protected configService: AppConfigService,
    protected authService: AuthService,
    protected location: LocationStrategy,
    protected router: Router,
    protected zone: NgZone,
  ) { }


  log(error: any, navigateToErrorPage: boolean, showMessage?: boolean): void {
    const errorToSend = this.addContextInfo(error);
    const serverLoggingUrl = this.configService.serverLoggingUrl;
    const growlMessage: IGrowlMessage = { title: 'Error Occurred', message: errorToSend.message };

    // if (this.authService.isAuthenticated && this.authService.token != null) {
    //   const tokenType = this.authService.tokenType || 'Bearer';
    //   config.customHttpHeaders = new HttpHeaders({ Authorization: `${tokenType} ${this.authService.token}` });
    // }

    // this.logger.updateConfig(config);

    if (error instanceof HttpErrorResponse) {
      growlMessage.message = 'API ERROR';
      // Server or connection error happened
      if (!navigator.onLine) {
        growlMessage.message = `<h4>No Internet Connection</h4>`;
      } else {
        // this.logger.fatal(errorToSend.message, [errorToSend]);
      }
    } else {
      if (this.configService.isProduction !== true) {
        // this.logger.trace(errorToSend.message, [errorToSend]);
      } else {
        // this.logger.error(errorToSend.message, [errorToSend]);
      }
      growlMessage.message = `<h4>${errorToSend.message}</h4>`;
    }

    if (showMessage === true || this.configService.isProduction !== true) {
      //Show Growl Message to the developer
    }

    if (this.configService.isProduction === true) {
      this.navigate('/application-error', navigateToErrorPage);
    }


  }

  navigate(url: string, navigateToErrorPage: boolean): void {
    if (navigateToErrorPage === true) {
      this.zone.run(() => this.router.navigate([url]).then(() => window.location.reload()));
    }
  }

  addContextInfo(error: any): IAppError {
    const name = error.name || null;
    const appId = this.configService.applicationName;
    const user = this.authService.isAuthenticated ? this.authService.username || 'unknown' : 'anonymous';
    const time = new Date().getTime();
    const id = `${appId}-${user}-${time}`;
    const url = this.location instanceof PathLocationStrategy ? this.location.path() : '';
    const status = error.status || null;
    const message = error.message || error.toString();
    const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);

    const errorWithContext: IAppError = { name, appId, user, time, id, url, status, message, stack };
    return errorWithContext;
  }

}
