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

console.log(this.planificacion);
this.planificacionService.createCurso(this.planificacion).subscribe(
  res=>this.router.navigate(['/lista'])
);
  }
  update():void{
    this.planificacionService.updateCurso(this.planificacion).subscribe(
      res=>this.router.navigate(['/lista'])
    );
  }
  cargar():void{
  this.activateRoute.params.subscribe(
    e=>{
      let id=e['id'];
      if(id){
        this.planificacionService.get(id).subscribe(
          es=>this.planificacion=es
        );
      }
    }
  );
  }
  
  }

 

  


