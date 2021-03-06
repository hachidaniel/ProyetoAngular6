import { Injectable } from '@angular/core';
import { Role } from './role.enum';
import { Observable,  BehaviorSubject, throwError as observableThrowError  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import * as decode from 'jwt-decode';
import { transformError } from '../common/common';
import { CacheService } from './cache.service';


@Injectable({
  providedIn: 'root'
})



export class AuthService extends CacheService {

  private readonly  authProvider: (email: string, password: string) => Observable<IServerAuthResponse>;
  authStatus = new  BehaviorSubject<IAuthStatus>(this.getItem('authStatus') || defaultAuthStatus);

  constructor(private httpClient: HttpClient) {
    super();
    this.authStatus.subscribe(authStatus =>{
      this.setItem('authStatus', authStatus);
    });
    this.authProvider = this.userAuthProvider;
  }

  private userAuthProvider( email: string, password: string ): Observable<IServerAuthResponse> {
     const headers = new HttpHeaders({'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': 'POST'});
     const srs =  `${environment.urlService}/token`;
     return this.httpClient.post<IServerAuthResponse>(srs, {email: email, password: password}, {headers: headers});
  }

  login(email: string, password: string): Observable<IAuthStatus> {
   this.logout();

   const loginResponse = this.userAuthProvider(email, password).pipe(
     map(value => {
       this.setToken(value.access_token);
       const result = decode(value.access_token);

       return result as IAuthStatus;
     }),
     catchError(transformError)
   );

   loginResponse.subscribe(
    res => {
      this.authStatus.next(res);
    },
    err => {
       this.logout();
       return observableThrowError(err);

    }

   );


   return loginResponse;

  }

  logout() {
    this.clearToken();
    // tslint:disable-next-line: no-use-before-declare
    this.authStatus.next(defaultAuthStatus);
  }
  private setToken(jwt: string) {
    this.setItem('jwt', jwt);
  }

  getToken(): string{
    return this.getItem('jwt') || '';
  }

  private clearToken(){
    this.removeItem('jwt');
  }

  getAuthStatus(): IAuthStatus {
   return this.getItem('authStatus');
  }
}

export interface IAuthStatus {
  role: Role;
  primarysid: number;
  unique_name: string;
}

interface IServerAuthResponse {
  access_token: string;
}

const defaultAuthStatus: IAuthStatus = {role: Role.None, primarysid: null, unique_name: null };
