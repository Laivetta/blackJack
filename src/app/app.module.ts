import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BancaComponent } from "../app/Elementos/banca/banca.component";
import { JugadorComponent } from "../app/Elementos/jugador/jugador.component";
import { BotonPararComponent } from "../app/Elementos/boton-parar/boton-parar.component";
import { BotonSeguirComponent } from "../app/Elementos/boton-seguir/boton-seguir.component";
import { ReportesComponent } from "../app/Elementos/reportes/reportes.component";
import { MesaComponent } from "../app/Elementos/mesa/mesa.component";
import { LoginComponent } from "../app/Elementos/login/login.component";

import {MazoServiceService} from "../app/Services/mazo-service.service"

@NgModule({
  declarations: [
    AppComponent,
    BancaComponent,
    JugadorComponent,
    BotonPararComponent,
    BotonSeguirComponent,
    ReportesComponent,
    MesaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MazoServiceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
