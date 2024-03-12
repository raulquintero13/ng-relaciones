import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,
    MenuComponent,
    DepartamentoComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
