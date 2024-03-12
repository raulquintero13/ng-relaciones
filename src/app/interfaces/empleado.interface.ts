import { Departamento } from "./departamentos.interface";

export interface Empleado{
  idEmpleado: number;
  nombre: string;
  apellido: string;
  curp: string;
  rfc: string;
  edad: number;
  telefono: string;
  correo: string;
  departamento: Departamento;
}
