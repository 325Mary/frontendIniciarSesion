// employees.component.ts
import { Component, OnInit } from '@angular/core';
import { SignService } from '../Services/sign.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  roles: any[] = [];
  employees$!: Observable<any[]>;
  selectedEmployeeId: string | null = null;
  selectedRoleId: string | null = null;

  constructor(private userService: SignService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    // Obtén la lista de usuarios basada en el estado actual de asignación de roles
    this.employees$ = this.userService.getUsers();
    this.listRoles();
  }

  listRoles(): void {
    this.userService.listRoles().subscribe(
      (data) => {
        this.roles = data;
        // Asigna el primer _id como valor predeterminado para el rol seleccionado
        if (this.roles.length > 0) {
          this.selectedRoleId = this.roles[0]._id;
        }
      },
      (error) => {
        console.error('Error al obtener roles', error);
      }
    );
  }

  assignRoles(employeeId: string): void {
    this.selectedEmployeeId = employeeId;
  }

  actualizarRol() {
    console.log('selectedEmployeeId:', this.selectedEmployeeId);
    console.log('selectedRoleId:', this.selectedRoleId);

    if (this.selectedEmployeeId && this.selectedRoleId) {
      // Llamada al servicio para actualizar el rol
      this.userService.actualizarRolUsuario(this.selectedEmployeeId, this.selectedRoleId)
        .subscribe(
          (response) => {
            console.log('Rol actualizado correctamente', response);
            // Puedes realizar acciones adicionales aquí, como actualizar la lista de usuarios en el componente.
            this.loadUserData(); // Actualiza la lista de usuarios después de la actualización exitosa del rol
          },
          (error) => {
            console.error('Error al actualizar el rol', error);
          }
        );
    } else {
      console.warn('Seleccione un usuario y un rol antes de actualizar');
    }
  }

  updateRoles() {
    this.actualizarRol();
  }

  clearSelection(): void {
    // Lógica para volver a cargar la tabla después de la actualización de roles
    this.selectedEmployeeId = null;
    this.selectedRoleId = null;
    this.loadUserData(); // Actualiza la lista de usuarios después de la limpieza de la selección
  }
}
