import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MensajeComponent } from './inicio/mensaje/mensaje.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { BannerComponent } from './inicio/banner/banner.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { EnviosComponent } from './inicio/envios/envios.component';
import { GeniosComponent } from './inicio/genios/genios.component';
import { HomeComponent } from './inicio/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TablaCategoriaComponent } from './tablas/tabla-categoria/tabla-categoria.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { EscritorioComponent } from './components/escritorio/escritorio.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    MensajeComponent,
    MainHeaderComponent,
    MainFooterComponent,
    BannerComponent,
    MainNavComponent,
    EnviosComponent,
    GeniosComponent,
    HomeComponent,
    NosotrosComponent,
    ColaboradoresComponent,
    PaisesComponent,
    PaisDetalleComponent,
    TiendaComponent,
    ProductosComponent,
    TablaCategoriaComponent,
    LoginComponent,
    EscritorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
