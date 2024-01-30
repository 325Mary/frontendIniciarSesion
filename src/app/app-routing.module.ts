import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreRegistroComponent} from "./pre-registro/pre-registro.component";
import { RegistroEmpresaComponent } from "./registro-empresa/registro-empresa.component";
import { RegistroEmpleadoComponent } from "./registro-empleado/registro-empleado.component";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [

  {path: 'SignIn/Up', component: PreRegistroComponent},
  {path: 'registroEmpresa', component: RegistroEmpresaComponent},
  {path: 'registroEmpleado', component: RegistroEmpleadoComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
