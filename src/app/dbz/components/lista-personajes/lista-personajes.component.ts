import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/Personaje.interface';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent {
  @Input() personajes:Personaje[] =[]

  @Output() onIndice: EventEmitter<number>= new EventEmitter()

  enviarIndice(evento:number){
    this.onIndice.emit(evento)
  }
}
