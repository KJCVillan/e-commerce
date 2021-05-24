import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  categoriasInsert (nombre, descripcion)
  {
    const ruta = "https://servicios.campus.pe/registrarcategorias.php";

    const formData: FormData = new FormData();
    formData.append("nombre",nombre)
    formData.append("descripcion",descripcion)

    return this.http.post(ruta,formData).pipe(
      map((res)=>{
        return res
      })
    )
  }
}
