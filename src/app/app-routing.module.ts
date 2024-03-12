import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';

const routes: Routes = [
  {path:'', component: DepartamentosComponent},
  {path:'departamento/:id', component: DepartamentoComponent},
  {path:'empleados', component: EmpleadosComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
