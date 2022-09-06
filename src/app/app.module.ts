import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanificacionComponent } from './planificacion/planificacion.component';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlanificacionComponent,
    InicioComponent,
    ContactoComponent,
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    MatCardModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
