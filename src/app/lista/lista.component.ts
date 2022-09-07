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
  plan:Planificacion[]=[];
  constructor(
    private planificacionService:PlanificacionService,
  private router:Router,
  private activateRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.planificacionService.getCurso().subscribe(
      e=>this.plan=e
    );
      
  }

}
