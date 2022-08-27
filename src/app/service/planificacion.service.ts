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
  return this.http.get<Planificacion>(this._url);
}
  getCurso(): Observable<Planificacion[]> {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
    return this.http.get<Planificacion[]>(this.urlGet, {
      headers: header
    });
  }
  createCurso(doc:Planificacion): Observable<Planificacion> {
    return this.http.post<Planificacion>(`${this.urlCreate}`, doc, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        Swal.fire('Error al guardar', 'NO se puede guardar al curso', 'error')
        return throwError(e);
      })
    );
  }

  deleteCurso(empid: String): Observable<Planificacion> {
    return this.http.delete<Planificacion>(`${this.urlDelete}/${empid}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        Swal.fire('Error al eliminar', 'No se puede eliminar', 'error')
        return throwError(e);
      })
    );
  }

  updateCurso( id: any): Observable<Planificacion> {
    return this.http.put<Planificacion>(`${this.urlUpdate}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        Swal.fire('Error al actualizar', 'NO se puede actualizar el curso', 'error')
        return throwError(e);
      })
    );
  }
}