import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from './models/Supplier';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  getSupplierList(page: number, rows: number, searchTerm: string = ''): Observable<Supplier[]> {
    return this.http.post<Supplier[]>(`${environment.urlService}/Supplier/GetPaginatedSupplier`,
                                                             {page: page, rows: rows, searchTerm: searchTerm});
  }
}
