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
    tenantId: '',
    password: '',
    direction:'',
    imgfirme: '' as string | File}
  
    constructor(private UserService: SignService) { }
    handleFileInput(event: any): void {
      const file = event.target.files[0];
      this.User.imgfirme = file;
    }
  
    registrar(): void {
      const formData = new FormData();
  
      // Agrega otros campos al formData
      formData.append('username', this.User.username);
      formData.append('telephone', this.User.telephone);
      formData.append('email', this.User.email);
      formData.append('tenantId', this.User.tenantId);
      formData.append('password', this.User.password);
      formData.append('direction', this.User.direction);
  
      // Agrega el archivo al formData
      if (this.User.imgfirme instanceof File) {
        formData.append('imgfirme', this.User.imgfirme);
      }
  
      this.UserService.registrarUsuario(formData).subscribe(response => {
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
        // Asigna el primer _id como valor predeterminado para tenantId
        if (this.companys.length > 0) {
          this.User.tenantId = this.companys[0]._id;
        }
      },
      (error) => {
        console.error('Error al obtener empresas', error);
      }
    );
  }
  
  
      
      
    }
