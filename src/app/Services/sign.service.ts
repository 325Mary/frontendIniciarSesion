import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse } from '@angular/common/http';
import { Company } from "../models/empresa";
import { Observable, Subject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignService {

  private baseUrl: string;

  
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://127.0.0.1:3200";
  }

  registrarUsuario(formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/registrer`, formData);
  }

  login(formValue: any) {
    const url = `${this.baseUrl}/iniciarSesion`;
    return this.httpClient.post<any>(url, formValue);
  }

  getUsers(): Observable<any[]> {
    const url=`${this.baseUrl}/getUsers`;
    return this.httpClient.get<any[]>(url)
  }


  createCompany(formValue: any): Observable<Company> {
    const url = `${this.baseUrl}/sendCompany`;
    return this.httpClient.post<any>(url, formValue, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  listCompanys(): Observable<any[]> {
    const url = `${this.baseUrl}/getAllCompanies`;

    return this.httpClient.get<any[]>(url);
  }

  listRoles(): Observable<any[]> {
    const url = `${this.baseUrl}/getRoles`;
    return this.httpClient.get<any[]>(url);

  }

  // sign.service.ts
actualizarRolUsuario(userId: string, nuevoRolId: string): Observable<any> {
  const body = { userId, nuevoRolId };
  return this.httpClient.put(`${this.baseUrl}/usuarios/actualizar-rol`, body);
}


changePassword(currentPassword: string, newPassword: string): Observable<HttpResponse<any>> {
  const data = { currentPassword, newPassword };
  return this.httpClient.post(`${this.baseUrl}/change-password`, data, { observe: 'response' });
}




}
