import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../interfaces/departamentos.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  url = "http://localhost:8080/api/departamentos";

  constructor( private http: HttpClient) {}


  getAll():Observable<any>{
    return this.http.get(this.url );
  };

  get(id: number):Observable<any>{
    return this.http.get(this.url + "/" + id);
  }

  saveOrUpdate(departamento: Departamento):Observable<any>{
    return (departamento.idDepartamento==0)? this.http.post(this.url, departamento): this.http.put(this.url, departamento);
  }
  delete(id: number):Observable<any>{
    return this.http.delete(this.url + "/" + id);
  }
}
