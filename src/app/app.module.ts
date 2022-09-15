import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanificacionComponent } from './planificacion/planificacion.component';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ListaComponent } from './lista/lista.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from "primeng/accordion";
import {FileUploadModule} from "primeng/fileupload";
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { UploadFilesComponent } from './upload-files/upload-files.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanificacionComponent,
    InicioComponent,
   ListaComponent,
  UploadFilesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    FileUploadModule,
    MatDialogModule,
    DialogModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
