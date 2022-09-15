import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UploadFilesService {
  
    //Url obtenida de la variable de enviroments
    baseUrlpost = "http//localhost:8090/subir";
    baseUrlget = "http//localhost:8090/files";    
    baseUrldelete = "http//localhost:8090/delete/{filename:.+}";
    //Inyeccion de HttpClient
    constructor(private http: HttpClient) { }
  
    //Metodo que envia los archivos al endpoint /upload 
    upload(file: File): Observable<HttpEvent<any>>{
      const formData: FormData = new FormData();
      formData.append('files', file);
     
      const req = new HttpRequest('POST', this.baseUrlpost, formData, {
        reportProgress: true,
        responseType: 'json'
      });
      return this.http.request(req);
    }
  
    //Metodo para Obtener los archivos
    getFiles(){
      return this.http.get(this.baseUrlget);
    }
  
    //Metodo para borrar los archivos
    deleteFile(filename:string){
      return this.http.get(this.baseUrldelete);
    }
  
  }