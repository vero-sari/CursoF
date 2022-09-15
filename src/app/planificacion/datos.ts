export class Datos  {
    datos;
    
    opcionSeleccionado: string  = '0';
    verSeleccion: string        = '';
  
    constructor(){
        this.datos = [1,2,3,4,5,6,7,8,9,10];
    }  
  
    capturar() {
        
        this.verSeleccion = this.opcionSeleccionado;
    }
  }