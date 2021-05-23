import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() CategoriaX: Categoria;

  constructor() { }

  ngOnInit(): void {//se ejecuta una sola vez al cargar el componente
  }

  ngOnChanges(): void {//se ejecuta al detectar un cambio
    console.log(this.CategoriaX);
  }
}
