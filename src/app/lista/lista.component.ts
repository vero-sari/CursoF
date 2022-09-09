import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planificacion } from '../modelos/Planificacion';
import { PlanificacionService } from '../service/planificacion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  planificacion:Planificacion=new Planificacion();
  planes:Planificacion[]=[];
  constructor(
    private planificacionService:PlanificacionService,
  private router:Router,
  private activateRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.getCursos();
   
      
  }
  getCursos(){
    this.planificacionService.getCurso().subscribe((resp: any)=>{
      console.log("CURSOS")
      console.log(resp.data)
      this.planes = resp.data
    })
  }
  delete(planificaciones:Planificacion):void{
    console.log("Eliminar");
    this.planificacionService.deleteCurso(planificaciones.id).subscribe(
      res=>this.planificacionService.getCurso().subscribe(
    response=>this.planes=response
      )
    );
    }
}
