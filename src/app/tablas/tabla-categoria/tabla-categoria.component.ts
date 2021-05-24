import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/entities/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-tabla-categoria',
  templateUrl: './tabla-categoria.component.html',
  styleUrls: ['./tabla-categoria.component.css']
})

export class TablaCategoriaComponent implements OnInit {

  listaCategorias: Categoria [];

  categoriasAgregarForms= new FormGroup ({
    nombre: new FormControl(),
    descripcion: new FormControl()
  })

  nuevaCategoria: any = {};

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriaService.categoriasSelect().subscribe(
      (res:Categoria[])=> {
        this.listaCategorias =res;
        console.log(res);
      }
    )
  }

  agregarCategoria(values){
    this.categoriaService.categoriasInsert(values.nombre, values.descripcion).subscribe(
      (res) => {
        this.nuevaCategoria = {
          idcategoria: res,
          nombre: values.nombre,
          descripcion: values.descripcion
        }
        this.listaCategorias.push(this.nuevaCategoria)
      }
    )
  }

}
