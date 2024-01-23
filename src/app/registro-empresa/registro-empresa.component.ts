import { Component } from '@angular/core';
import { SignService } from "../Services/sign.service";
import { Company } from "../models/empresa";
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrl: './registro-empresa.component.scss'
})
export class RegistroEmpresaComponent {
  // company: Company = new Company ('', '', '', '', '', '');
company = {
  nameCompany: '',
    telephone: '',
    tenantId:'',
    email: '',
    direction:'',
    pdfRunt: '' 
}
  constructor(private companyService: SignService) { }


  send(){
    this.companyService.createCompany(this.company).subscribe(
      response=> console.log('Datos enviados', response),
      error =>console.log('Error al enviar Datos', error)
      
      
    )
  }
}
