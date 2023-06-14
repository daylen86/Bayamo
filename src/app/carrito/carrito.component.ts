import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
   seleccionada: string | undefined
   ruedas =[
    {
      identificador: 'delantera-derecha',
      marca: 'Michelin',
      Precio: 10
     },
     {
      identificador: 'delantera-izquierda',
      marca: 'Izagú',
      Precio: 80
     },
     {
      identificador: 'Trasera-derecha',
      marca: 'Michelin',
      Precio: 20
     },
     {
      identificador: 'dtrasera-derecha',
      marca: 'MJKC',
      Precio: 100
     },
   ] 
   recibirSeleccionRueda(identificador:string){
    this.seleccionada = identificador;

   }
}
