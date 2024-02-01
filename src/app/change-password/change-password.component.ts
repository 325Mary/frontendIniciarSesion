import { Component } from '@angular/core';
import { SignService } from "../Services/sign.service";
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private SignService: SignService) {}

  onSubmit() {
    if (this.newPassword === this.confirmNewPassword) {
      this.SignService.changePassword(this.currentPassword, this.newPassword).subscribe(
        (response: HttpResponse<any>) => {
          this.successMessage = 'Contraseña cambiada con éxito';
          this.errorMessage = null;
        },
        (error: any) => {
          this.successMessage = null;
          this.errorMessage = 'Error al cambiar la contraseña';
        }
      );
    } else {
      this.successMessage = null;
      this.errorMessage = 'Las contraseñas no coinciden';
    }
  }
}
