import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamentos.interface';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamento = {} as Departamento;
  params: any;

  constructor(private departamentosService: DepartamentosService,
    private route: ActivatedRoute,
    ){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.params = params);

    this.departamentosService.get(this.params.params.id).subscribe({
      next: resp=>{
        console.log('departamento',resp);
        this.departamento = resp;
      }
    })

  }


}
