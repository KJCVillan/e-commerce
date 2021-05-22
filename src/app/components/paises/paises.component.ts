import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/entities/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  listaPaises: Pais [];
  constructor(private paisesService: PaisesService) { }


  ngOnInit(): void {
    this.paisesService.paisesSelect().subscribe(
      (res: Pais[])=> {
        this.listaPaises=res;
        console.log(res);
      }
    )
  }

}
