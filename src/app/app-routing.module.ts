import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreRegistroComponent} from "./pre-registro/pre-registro.component";
import { RegistroEmpresaComponent } from "./registro-empresa/registro-empresa.component";
import { RegistroEmpleadoComponent } from "./registro-empleado/registro-empleado.component";
import { HomeComponent } from "./home/home.component";
import { IndexComponent } from "./index/index.component";
import {SidebarComponent  } from "./sidebar/sidebar.component";
import {EmployeesComponent  } from "./employees/employees.component";
import {ChangePasswordComponent  } from "./change-password/change-password.component";
import { PersonalizationComponent } from "./personalization/personalization.component";
const routes: Routes = [

  {path: 'SignIn/Up', component: PreRegistroComponent},
  {path: 'registroEmpresa', component: RegistroEmpresaComponent},
  {path: 'registroEmpleado', component: RegistroEmpleadoComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: IndexComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'personalization', component: PersonalizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
