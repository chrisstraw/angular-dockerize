import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AppGlobalErrorHandler implements ErrorHandler {

  // private errorService!: CourtErrorService;

  constructor(private injector: Injector) { }

  handleError(error: any): void {
    console.error('AppGlobalErrorHandler', error);
    // this.errorService = this.injector.get<CourtErrorService>(CourtErrorService);
    // const apiError = error instanceof HttpErrorResponse;
    // this.errorService.log(error, apiError);
  }
}
