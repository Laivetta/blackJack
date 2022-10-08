import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancaComponent } from "../app/Elementos/banca/banca.component"
import { JugadorComponent } from "../app/Elementos/jugador/jugador.component"
import { MesaComponent } from "../app/Elementos/mesa/mesa.component";
import { HomeComponent } from './Elementos/home/home.component';
import { LoginComponent } from './Elementos/login/login.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path: "mesa", component:  MesaComponent},
   {path: "integrantes", component:HomeComponent},
  {path:"", redirectTo:"integrantes", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
