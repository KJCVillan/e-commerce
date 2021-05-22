import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) {}

  paisesSelect()
  {
    const ruta = "http://restcountries.eu/rest/v2/all";
    return this.http.get(ruta);
  }

  paisDatos(codigo3Pais)
  {
    const ruta = "https://restcountries.eu/rest/v2/alpha/" + codigo3Pais;
    return this.http.get(ruta);
  }
  
}
