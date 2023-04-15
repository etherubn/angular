import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainPageComponent } from './pages/dbz-main-page/dbz-main-page.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListaPersonajesComponent,
    AgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DbzMainPageComponent
  ]
})
export class DbzModule { }
