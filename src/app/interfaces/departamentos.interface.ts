import { Empleado } from "./empleado.interface";

export interface Departamento{
  idDepartamento: number
  nombre: String;
  descripcion: String;
  direccion: String;
  empleados?: Empleado[];
}
