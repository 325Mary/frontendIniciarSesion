import { Component } from '@angular/core';
import { SignService } from "../Services/sign.service";
@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrl: './registro-empleado.component.scss'
})
export class RegistroEmpleadoComponent {
  selectedCompanys: string = '';
  companys: any =[];
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
  
  ngOnInit(): void {
    this.listCompanys();
  }

  listCompanys(): void {
    this.UserService.listCompanys().subscribe(
      (data) => {
        this.companys = data;
      },
      (error) => {
        console.error('Error al obtener empresas', error);
      }
    );
  }
  
      
      
    }
