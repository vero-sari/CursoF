import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { InicioComponent } from './inicio/inicio.component';
import { PlanificacionComponent } from './planificacion/planificacion.component';

const routes: Routes = [
  {path: 'planificacion', component:PlanificacionComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'lista', component:ListaComponent},
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
 