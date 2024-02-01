import { Component } from '@angular/core';

@Component({
  selector: 'app-personalization',
  templateUrl: './personalization.component.html',
  styleUrl: './personalization.component.scss'
})
export class PersonalizationComponent {
  usuario = {
    nombre: '',
    correo: '',
    tema: 'tema1',
    colorFondo: '#ffffff',
    colorTexto: '#000000'
  };

  guardarCambios() {
    // Lógica para guardar cambios en el backend
    console.log('Guardando cambios', this.usuario);
    // Puedes agregar llamadas a servicios para guardar en el backend
  }
}
