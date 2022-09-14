import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planificacion } from '../modelos/Planificacion';
import { PlanificacionService } from '../service/planificacion.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import swal from "sweetalert2";
import Docxtemplater from "docxtemplater";
//import PizZip from "pizzip";
//import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import { Observable, ReplaySubject } from 'rxjs';

/*function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}*/

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
@Component({
  selector: 'app-planificacion',
  templateUrl: './planificacion.component.html',
  styleUrls: ['./planificacion.component.css']
})
export class PlanificacionComponent implements OnInit {
planificacion=new Planificacion();
formCurso: FormGroup;

public dialogoGuardaryGenerar: boolean=false;
public base64Output: string=" ";
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
  
 /* onFileSelected(event:any) {
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.base64Output = base64;
      this.planificacion.documento = base64;
    });
  }*/

  /*convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    console.log(result)
    return result;
  }*/

  }

 

  


