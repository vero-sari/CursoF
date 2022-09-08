import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planificacion } from '../modelos/Planificacion';
import { PlanificacionService } from '../service/planificacion.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import swal from "sweetalert2";
@Component({
  selector: 'app-planificacion',
  templateUrl: './planificacion.component.html',
  styleUrls: ['./planificacion.component.css']
})
export class PlanificacionComponent implements OnInit {
planificacion=new Planificacion();
formCurso: FormGroup;

constructor(
  private planificacionService:PlanificacionService,
  private router:Router,
  private formBuilder: FormBuilder,
  private activateRoute:ActivatedRoute){
    this.formCurso = this.formBuilder.group({
      nombre_curso: ['', Validators.required],
      docente: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      horario: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }
  ngOnInit(): void {
 

  }
  
  
  create(): void {
    if (this.formCurso.invalid) {
      swal.fire(
        'Error de entrada',
        'Revise que los campos no esten vacíos',
        'error'
      )
      return;
    }
    this.planificacionService.createCurso(this.planificacion).subscribe(
      Response => {
        swal.fire(
          'Curso Guardado',
          `Curso ${this.planificacion} creada con exito!`,
          'success'
        )
        this.limpiar()
      }
    )


  }

  limpiar(): void {
    this.planificacion.nombre_curso = null;
    this.planificacion.docente = null;
    this.planificacion.horario = null;
    
  }



  }

 

  


