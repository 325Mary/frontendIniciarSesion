import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreRegistroComponent} from "./pre-registro/pre-registro.component";
import { RegistroEmpresaComponent } from "./registro-empresa/registro-empresa.component";
import { RegistroEmpleadoComponent } from "./registro-empleado/registro-empleado.component";
const routes: Routes = [

  {path: 'registrar', component: PreRegistroComponent},
  {path: 'registroEmpresa', component: RegistroEmpresaComponent},
  {path: 'registroEmpleado', component: RegistroEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
