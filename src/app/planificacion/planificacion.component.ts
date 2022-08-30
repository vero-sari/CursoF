import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planificacion } from '../modelos/Planificacion';
import { PlanificacionService } from '../service/planificacion.service';

@Component({
  selector: 'app-planificacion',
  templateUrl: './planificacion.component.html',
  styleUrls: ['./planificacion.component.css']
})
export class PlanificacionComponent implements OnInit {

  curso:Planificacion= new Planificacion();
  plan:Planificacion[]=[];
   title = 'angular-cursosf';
   constructor(
    
  private router:Router,
  private planificacionService:PlanificacionService,
  private activateRoute:ActivatedRoute
   ) { }
  ngOnInit(): void {
    this.create
  }
  create():void{
    console.log(this.curso);
    this.planificacionService.createCurso(this.curso).subscribe(
      res=>this.router.navigate(['/CrearCurso'])
    );
  }

}
