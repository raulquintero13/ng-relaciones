import { Component } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Router } from '@angular/router';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { Departamento } from 'src/app/interfaces/departamentos.interface';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  public departamentos: Departamento[] =[];
  public empleados: Empleado[] = [];
  public empleado: Empleado = {"idEmpleado": 0} as Empleado;


  constructor(private empleadosService: EmpleadosService, private departamentosService: DepartamentosService ,private router: Router){}

  ngOnInit(): void {

    this.getAllEmpleados();
    this.departamentosService.getAll().subscribe({
      next: resp=>{
        this.departamentos = resp;
        console.log('departamentos', resp);
      }
    });


  }

  onSubmit(){
    this.empleadosService.saveOrUpdate(this.empleado).subscribe({
      next: resp=>{
        console.log('empleado enviado', this.empleado);
        this.getAllEmpleados()
      }
    })
  }

  limpiar(){
    this.empleado={"idEmpleado":0} as Empleado
  }

  ver(id: number){
    this.router.navigate(
      ['/empleado/' + id]);
  }
  editar(id: number){
    this.empleadosService.get(id).subscribe({
      next: resp=>{
        this.empleado = resp;
        console.log("empleado",resp)
      }
    })
  }

  delete(id: number){
    this.empleadosService.delete(id).subscribe({
      next: resp=>{
        this.getAllEmpleados();
      },
      error: resp=>{
        console.log('delete error', resp)
      }
    })
  }

  getAllEmpleados(){
    this.empleadosService.getAll().subscribe({
      next: resp=>{
        this.empleados = resp;
        console.log('empleados', resp);
      }
    });
  }


}
