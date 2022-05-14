import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { IUserDetail } from '../../tax-interface/IUserDetail';
import { ITax } from '../../tax-interface/ITax';



@Injectable({
  providedIn: 'root'
})
export class TaxServiceService {

  constructor(private http: HttpClient) { }

  AddTaxInformtion(obj: ITax): Observable<number> {

    return this.http.post<number>('https://localhost:44386/api/Tax/AddTax', obj).pipe(catchError(this.errorHandler));
  }

  UpdateTaxInformtion(obj: ITax): Observable<number> {
    return this.http.post<number>('https://localhost:44386/api/Tax/UpdateTax', obj).pipe(catchError(this.errorHandler));
  }

  GetUserTaxData(PanCard: string, TAX_FILLING: string): Observable<IUserDetail[]> {
    return this.http.get<IUserDetail[]>('https://localhost:44386/api/Tax/GetUserDetails?PanCard=' + PanCard + '&TAX_FILLING=' + TAX_FILLING).pipe(catchError(this.errorHandler));
  }

  GetAllUserTaxData(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:44386/api/Tax/GetAllUserDetails').pipe(catchError(this.errorHandler));
  }



  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
