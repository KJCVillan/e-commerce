import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MensajeComponent } from './inicio/mensaje/mensaje.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    MensajeComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
