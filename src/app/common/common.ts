import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export function transformError(error: HttpErrorResponse | string ) {
  let errorMessage = 'An unknown error has ocurred';
  if (typeof error === 'string' ) {
      errorMessage = error;
  } else if (error.error instanceof ErrorEvent){
      errorMessage = `Request failed with ${error.error} ${error.statusText }`;
   }
   return throwError(errorMessage);

   }
