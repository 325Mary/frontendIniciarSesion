import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Company } from "../models/empresa";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private baseUrl: string;

  
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://127.0.0.1:3200";
  }

  registrarUsuario(User: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/register`, User);
  }

  login(formValue: any) {
    const url = `${this.baseUrl}/iniciarSesion`;
    return this.httpClient.post<any>(url, formValue);
  }


  createCompany(formValue: any): Observable<Company> {
    const url = `${this.baseUrl}/sendCompany`;
    return this.httpClient.post<any>(url, formValue, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}