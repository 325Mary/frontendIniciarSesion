import { Component } from '@angular/core';
import { SignService } from "../Services/sign.service";
@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrl: './registro-empleado.component.scss'
})
export class RegistroEmpleadoComponent {
  selectedNit: string = '';
  nits = ['12345', '67890', '54321']; // Suponiendo que tienes una lista de Nits
  User = {
    username: '',
    telephone: '',
    email: '',
    direction:'',
    imgfirme: '' 
}
  
    constructor(private UserService: SignService) { }
    registrar() {
      const User = {
        username: '',
        telephone: '',
        email: '',
        direction:'',
        imgfirme: '' 
    }
    this.UserService.registrarUsuario(User).subscribe(response => {
      console.log('Usuario registrado:', response);
    }, error => {
      console.error('Error al registrar:', error);
    });
  }
  
  
      
      
    }
