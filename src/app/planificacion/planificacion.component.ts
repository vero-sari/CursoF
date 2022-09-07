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
planificacion:Planificacion=new Planificacion();


constructor(private planificacionService:PlanificacionService,
  private router:Router,
  private activateRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.create();

  }
  create():void{
    console.log(this.planificacion);
    this.planificacionService.createCurso(this.planificacion).subscribe(
      res=>this.router.navigate(['/inicio'])
    );
  }
  crearCarrera(): void {
   
    this.planificacionService.createCurso(this.planificacion).subscribe(
     )
        
      }
    


  }

 

  


