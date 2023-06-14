import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rueda',
  templateUrl: './rueda.component.html',
  styleUrls: ['./rueda.component.css']
})
export class RuedaComponent {
  @Input() identificador!: string;
  @Input() marca!: string;
  @Input() precio!: number;

  @Output() ruedaSeleccionada = new EventEmitter<string>();

  emitirSeleccion(){
    this.ruedaSeleccionada.emit(this.identificador);
  }
}
