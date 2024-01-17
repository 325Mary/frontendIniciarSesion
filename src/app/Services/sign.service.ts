import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignService {

  private baseUrl: string;

  
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://127.0.0.1:3200";
  }

  register(formValue: any) {
    const formData = new FormData();
    Object.keys(formValue).forEach(key => {
      formData.append(key, formValue[key]);
    });

    const url = `${this.baseUrl}/registrar`;
    return this.httpClient.post<any>(url, formData);
  }

  login(formValue: any) {
    const url = `${this.baseUrl}/iniciarSesion`;
    return this.httpClient.post<any>(url, formValue);
  }


  sendEmail(form: any) {
    return this.httpClient.post(this.baseUrl, form);
}
}