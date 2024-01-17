import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignService } from "../Services/sign.service";

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrl: './registro-empresa.component.scss'
})
export class RegistroEmpresaComponent {

  empresaForm: any;
  emailService: any;

  constructor(private userService: SignService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.sendEmail(form.value).subscribe(
        (        response: any) => {
          console.log('Datos enviados con éxito', response);
        },
        (        error: any) => {
          console.error('Error al enviar datos', error);
        }
      );
    }
  }
  
  
}
