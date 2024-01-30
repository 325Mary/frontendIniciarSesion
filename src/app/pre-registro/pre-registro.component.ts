import { Component, OnInit } from '@angular/core';
import { SignService } from "../Services/sign.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-pre-registro',
  templateUrl: './pre-registro.component.html',
  styleUrls: ['./pre-registro.component.scss']
})
export class PreRegistroComponent implements OnInit {

  
  pestanaActual: string = 'valorInicial'; 
  user = {
    email: '',
    password: ''
  };
  mensajeError: string = '';
rutaSeleccionada: any;

  constructor(private userService: SignService, private router: Router) { }
 
  ngOnInit(): void {
    const pestanaGuardada = localStorage.getItem('pestanaActual');
    if (pestanaGuardada) {
      this.pestanaActual = pestanaGuardada;
    }
  }

  onSubmit() {
    this.userService.login(this.user).subscribe(
      response => {
        if (response.error) {
          this.mensajeError = 'Error al iniciar sesión';
          console.error('Error de inicio de sesión:', response.error);
        } else {
          this.mensajeError = '';
          console.log('Inicio de sesión exitoso:', response);
          this.router.navigate(['home'])
                }
      },
      httpError => {
        this.mensajeError = 'Error al iniciar sesión';
        console.error('Error HTTP en inicio de sesión:', httpError);
      }
    );
  }

  cambiarPestana(pestana: string): void {
    this.pestanaActual = pestana;
    localStorage.setItem('pestanaActual', pestana);
  }

  navegar() {
    if (this.rutaSeleccionada) {
      this.router.navigate([this.rutaSeleccionada]);
    }
  }

}
