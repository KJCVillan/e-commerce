import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/entities/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { faAlignCenter, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

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

  categoriasActualizarForms= new FormGroup ({
    idcategoria: new FormControl(),
    nombre: new FormControl(),
    descripcion: new FormControl()
  })

  categoriaActualizar: Categoria;

  nuevaCategoria: any = {};

  faEdit = faEdit;
  faTimes = faTimes;
  

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
        this.categoriasAgregarForms.reset();
      }
    )
  }

  editarCategoria(filaCategoria: Categoria)
  {
    console.log(filaCategoria)
    this.categoriaActualizar = filaCategoria;
  }

  actualizarCategoria(values)
  {
    this.categoriaService.categoriasUpdate(values.idcategoria, values.nombre, values.descripcion).subscribe();
    document.getElementById("btnCerrar").click();
  }

  eliminarCategoria(filaCategoria: Categoria)
  {
    var respuesta = confirm("¿esta seguro que desea eliminar el contenido de " + filaCategoria.nombre + "?");
    if (respuesta === true) {
      this.categoriaService.categoriasDelete(filaCategoria.idcategoria).subscribe()
      this.listaCategorias = this.listaCategorias.filter(
        item => item.idcategoria !== filaCategoria.idcategoria
      );
    }
    alert("se ha eliminado la categoria: " + filaCategoria.nombre);
  }
  
}
