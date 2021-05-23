import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoriasService {

  constructor(private http: HttpClient) { }

  categoriasSelect()
  {
    const ruta = "http://servicios.campus.pe/serviciocategorias.php";
    return this.http.get(ruta);
  }
}
