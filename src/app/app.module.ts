import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  PreRegistroComponent} from "./pre-registro/pre-registro.component";
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { RegistroEmpleadoComponent } from './registro-empleado/registro-empleado.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeesComponent } from './employees/employees.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PersonalizationComponent } from './personalization/personalization.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreRegistroComponent,
    RegistroEmpresaComponent,
    RegistroEmpleadoComponent,
    HomeComponent,
    IndexComponent,
    SidebarComponent,
    EmployeesComponent,
    ChangePasswordComponent,
    PersonalizationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
