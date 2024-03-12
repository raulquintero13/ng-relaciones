import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Departamento } from 'src/app/interfaces/departamentos.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit{
  public departamentos: Departamento[] = [];
  public departamento: Departamento = {"idDepartamento": 0} as Departamento;

  constructor(private departamentosService: DepartamentosService, private router: Router){}

  ngOnInit(): void {

    this.getAllDepartamentos();
  }

  onSubmit(){
    this.departamentosService.saveOrUpdate(this.departamento).subscribe({
      next: resp=>{
        this.departamento = {"idDepartamento": 0} as Departamento;
        this.getAllDepartamentos();
        alert(resp.mensaje);
        console.log('respSave', resp);

      },
      error: resp=>{
        alert(resp.mensaje);
      }
    });

  }

  limpiar(){
    this.departamento={"idDepartamento":0} as Departamento
  }

  ver(id: number){
    this.router.navigate(
      ['/departamento/' + id]);
  }
  editar(id: number){
    this.departamentosService.get(id).subscribe({
      next: resp=>{
        this.departamento = resp;
        console.log("dpto",resp)
      }
    })
  }

  delete(id: number){

    this.departamentosService.delete(id).subscribe({
      next: resp=>{
        this.getAllDepartamentos();
      }
    })
  }

  private getAllDepartamentos(){
    this.departamentosService.getAll().subscribe({
      next: resp=>{
        this.departamentos = resp;
        console.log('departamentos', resp);
      }
    });
  }

}
