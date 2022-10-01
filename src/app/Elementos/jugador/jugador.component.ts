import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MazoServiceService} from "../../Services/mazo-service.service" 


@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit{

  //esta variable viene del padre Mesa y era el valor que se obtuvo al presionar el boton SEGUIR
  @Input() cartaRecibida : String = "";

  @Input() valorCartaRecibida : number = 0;
  
  sumaCartas: number;
  
  
  constructor(public mazoService:MazoServiceService) {
    this.sumaCartas = 0;
   }
   

  ngOnInit(): void {
    let primera: String = this.mazoService.obtenerCartaAleatoria()
    this.mazoService.insertarCartaArrayJugador(primera);
    this.sumaCartas += this.mazoService.calcularValorCarta(primera);


    let segunda : String = this.mazoService.obtenerCartaAleatoria()
    this.mazoService.insertarCartaArrayJugador(segunda);
    this.sumaCartas += this.mazoService.calcularValorCarta(segunda);
 
    this.mazoService.transformarArrayEnImagenesJugador();
    
  }

  sumarValorCarta(parametro: number){
    this.sumaCartas += parametro;  
    
     if(this.sumaCartas > 21){
      alert("pasado")
    }
  }


}
