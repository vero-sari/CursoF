import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { Planificacion } from "../modelos/Planificacion";

@Injectable({
  providedIn: 'root'
})
export class PlanificacionService {
  _url = "http//localhost:8090"
  private urlCreate: string ="http://localhost:8090/CrearCurso";
  private urlDelete: string = "http://localhost:8090/EliminarCurso/{id}";
  private urlUpdate: string = "http://localhost:8090/EditarCurso/{id}";
  private urlGet :string= 'http://localhost:8090/ListarCurso';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router) { }

get(id:any):Observable<Planificacion>{
  return this.http.get<Planificacion>(this._url+'/'+id);
}
  getCurso(): Observable<Planificacion[]> {
    return this.http.get<Planificacion[]>(this.urlGet);
  }
  createCurso(plan:Planificacion): Observable<Planificacion> {
    return this.http
      .post<Planificacion>(this.urlCreate, plan)
      .pipe(
        catchError((e) => {
          swal.fire(
            'Error al guardar',
            'NO se puede guardar el curso',
            'error'
          );
          return throwError(e);
        })
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