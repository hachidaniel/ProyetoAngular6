import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private authService:AuthService, private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const jwt = this.authService.getToken();
        const authResquest = req.clone({setHeaders: {authorization: `Bearer ${jwt}` } });

        return  next.handle(authResquest).pipe(
         catchError((err, caught) => {
             if (err.status === 401 ) {
                 this.router.navigate(['/login'], {
                     queryParams: { redirectUrl: this.router.routerState.snapshot.url }, }); }
            return observableThrowError(err);
         })

        );
    }
}
