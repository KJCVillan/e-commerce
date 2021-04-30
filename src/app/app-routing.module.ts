import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [
  // agregando esta ruta activamos el router-outlet
  {path: '', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'colaboradores', component: ColaboradoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
