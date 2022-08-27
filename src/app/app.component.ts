import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planificacion } from './modelos/Planificacion';
import { PlanificacionService } from './service/planificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  curso:Planificacion= new Planificacion();
  plan:Planificacion[]=[];
   title = 'angular-cursosf';
   constructor(
    private planificacionService:PlanificacionService,
  private router:Router,
  private activateRoute:ActivatedRoute
   ) { }
  ngOnInit(): void {
    this.create
  }
  create():void{
    console.log(this.curso);
    this.planificacionService.createCurso(this.curso).subscribe(
      res=>this.router.navigate(['/CrearCliente'])
    );
  }
}
