import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";

import Swal from 'sweetalert2';
import { Planificacion } from "../modelos/Planificacion";

@Injectable({
  providedIn: 'root'
})
export class PlanificacionService {
  _url = "localhost:8080"
  private urlCreate: string = this._url + '/CrearCurso';
  private urlDelete: string = this._url + '/EliminarCurso/{id}';
  private urlUpdate: string = this._url + '/EditarCurso/{id}';
  private urlGet :string=this._url +'/ListarCurso';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router) { }

get(id:any):Observable<Planificacion>{
  return this.http.get<Planificacion>(this._url+'/'+id);
}
  getCurso(): Observable<Planificacion[]> {
    return this.http.get<Planificacion[]>(this.urlGet);
  }
  createCurso(plan:Planificacion): Observable<Planificacion> {
    return this.http.post<Planificacion>(this.urlCreate, plan
    );
  }

 deleteCurso(id:any):Observable<Planificacion>{
    return this.http.delete<Planificacion>(this.urlDelete+'/'+id);
  }

  updateCurso(plan:Planificacion): Observable<Planificacion> {
    return this.http.put<Planificacion>(this.urlUpdate, plan 
    );
  }
}