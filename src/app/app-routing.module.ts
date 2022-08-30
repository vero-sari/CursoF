import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanificacionComponent } from './planificacion/planificacion.component';

const routes: Routes = [
  {path: 'planificacion', component:PlanificacionComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
