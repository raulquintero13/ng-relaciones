import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  url = "http://localhost:8080/api/empleados";

  constructor( private http: HttpClient) {}


  getAll():Observable<any>{
    return this.http.get(this.url );
  };
  get(id: number):Observable<any>{
    return this.http.get(this.url + "/" + id);
  }

  saveOrUpdate(empleado: Empleado):Observable<any>{
    return (empleado.idEmpleado==0)? this.http.post(this.url, empleado): this.http.put(this.url, empleado);
  }
  delete(id: number):Observable<any>{
    return this.http.delete(this.url + "/" + id);
  }
}
