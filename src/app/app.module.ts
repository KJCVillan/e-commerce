import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

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
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
