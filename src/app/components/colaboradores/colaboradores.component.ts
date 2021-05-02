import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/entities/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  listaEmpleados: Empleado [];
  constructor(private empleadoService: EmpleadosService) { }


  ngOnInit(): void {
    this.empleadoService.empleadosSelect().subscribe(
      (res: Empleado[])=> {
        this.listaEmpleados=res;
        console.log(res);
      }
    )
  }
}