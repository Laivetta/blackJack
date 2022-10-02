import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BancaComponent } from "../app/Elementos/banca/banca.component";
import { JugadorComponent } from "../app/Elementos/jugador/jugador.component";

import { ReportesComponent } from "../app/Elementos/reportes/reportes.component";
import { MesaComponent } from "../app/Elementos/mesa/mesa.component";
import { LoginComponent } from "../app/Elementos/login/login.component";

import {MazoServiceService} from "../app/Services/mazo-service.service";
import { HomeComponent } from './Elementos/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    BancaComponent,
    JugadorComponent,
    ReportesComponent,
    MesaComponent,
    LoginComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MazoServiceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
