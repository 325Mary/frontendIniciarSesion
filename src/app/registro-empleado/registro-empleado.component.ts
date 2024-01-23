import { Component } from '@angular/core';
import { SignService } from '../Services/sign.service'; // Ajusta la ruta según sea necesario

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.scss']
})
export class RegistroEmpleadoComponent {

  User = {
    name: '',
    telephone: '',
    tenantId: '',
    email: '',
    direction: '',
  };

  constructor(private signService: SignService) {}

  registerUser() {
    this.signService.register(this.User).subscribe({
      next: (response) => {
        console.log('usuario registrada:', response);
        // Maneja el registro exitoso
      },
      error: (error) => {
        console.error('Fallo en el registro:', error);
        // Maneja los errores
      }
    });
  }
  }
