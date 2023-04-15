import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/Personaje.interface';


@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})

export class AgregarPersonajeComponent {
  personaje:Personaje = {
    nombre:"",
    poder:0
  }

  @Output() onPersonajeNuevo: EventEmitter<Personaje>= new EventEmitter()

  agregarPersonaje(){
    if (this.personaje.nombre.trim().toLocaleLowerCase()!=="") {
      this.onPersonajeNuevo.emit(this.personaje)
    }
    this.personaje={
      nombre:"",
      poder:0
    }
  }
}
