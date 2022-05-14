import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { IUserDetail } from '../../tax-interface/IUserDetail';


@Injectable({
  providedIn: 'root'
})
export class UserValidationService {

  constructor(private http: HttpClient) { }

  validateCredentials(obj: IUserDetail): Observable<number> {

    return this.http.post<number>('https://localhost:44386/api/Tax/LoginValidation', obj).pipe(catchError(this.errorHandler));
  }


  signup(obj: IUserDetail): Observable<number> {

    return this.http.post<number>('https://localhost:44386/api/Tax/RegisterNewUser', obj).pipe(catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
