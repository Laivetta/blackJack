import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancaComponent } from "../app/Elementos/banca/banca.component"
import { JugadorComponent } from "../app/Elementos/jugador/jugador.component"
import { MesaComponent } from "../app/Elementos/mesa/mesa.component";
import { LoginComponent } from './Elementos/login/login.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path: "mesa", component:  MesaComponent},
  {path: "mazo", component: BancaComponent},
  {path: "jugador", component: JugadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
