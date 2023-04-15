import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/Personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './dbz-main-page.component.html',
  styleUrls: ['./dbz-main-page.component.css']
})
export class DbzMainPageComponent {
  personajes: Personaje[]=[{
    nombre:"Trunk",
    poder:100
  },
  {
    nombre:"Goku",
    poder:500
  }
  ]

  agregarPersonaje(evento:Personaje){
    let valor = this.personajes.some(elemento=>{
      elemento.nombre===evento.nombre
    })
    if(!valor){
      this.personajes = [...this.personajes,evento]
    }
    console.log(this.personajes)
  }

  eliminarPersonaje(evento:number){
    this.personajes.splice(evento,1)
  }

}
