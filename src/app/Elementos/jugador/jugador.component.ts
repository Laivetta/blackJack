import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MazoServiceService } from '../../Services/mazo-service.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css'],
})
export class JugadorComponent implements OnInit {
  @Output() onPuntosJugador = new EventEmitter();
  @Output() onPararJugador = new EventEmitter();
  @Output() onReiniciar = new EventEmitter();

  sumaCartas: number;
  bandera: boolean = true;
  valorAs: string;
  banderaAs: boolean = false;




  //array jugador
  arrayJugador: String[];
  arrayImagenesJugador: String[];

  constructor(public mazoService: MazoServiceService) {
    this.sumaCartas = 0;
    this.valorAs = "";


    this.arrayJugador = [];
    this.arrayImagenesJugador = [];
  }

  ngOnInit(): void {
    let carta1 = this.mazoService.obtenerCartaAleatoria();
    this.arrayJugador.push(carta1);
    this.sumaCartas += this.calcularValorCarta(carta1);
    this.AgregarArrayEnImagenesJugador(carta1);

    let carta2 = this.mazoService.obtenerCartaAleatoria();
    this.arrayJugador.push(carta2);
    this.calcularValorCarta(carta2);
    this.sumaCartas += this.calcularValorCarta(carta2);
    this.AgregarArrayEnImagenesJugador(carta2);
  }

  AgregarArrayEnImagenesJugador(carta: String) {
    //aca tengo que vaciar el arrayImagenesJugador porque sino duplico todo

    let item = '../../../assets/Cartas/' + carta + '.png';

    this.arrayImagenesJugador.push(item);
  }

  calcularValorCarta(carta: String): number {
    //el split divide el string cada vez que encuentra el - . Despues obtengo la primer parte de la carta que es un numero
    let data = carta.split('-')[0];

    if (data === 'J' || data === 'K' || data === 'Q') {
      return 10;
    } else if (data === 'A') {
      return 11;
    } else {
      return parseInt(data);
    }
  }

  seguir() {
    let cartaAgregada: String = this.mazoService.obtenerCartaAleatoria();

    if (
      cartaAgregada === 'A-D' ||
      cartaAgregada === 'A-H' ||
      cartaAgregada === 'A-S' ||
      cartaAgregada === 'A-C'
    ) {

      this.banderaAs =true;

      this.arrayJugador.push(cartaAgregada);

      this.AgregarArrayEnImagenesJugador(cartaAgregada);

    } else {

      this.arrayJugador.push(cartaAgregada);

      this.AgregarArrayEnImagenesJugador(cartaAgregada);

      this.sumaCartas += this.calcularValorCarta(cartaAgregada);
    }

    if (this.sumaCartas > 21) {
      this.bandera = false;
      setTimeout(() => {
        alert('BANCA gano');
      }, 500);
    }

    //emito los puntos del jugador al padre
    this.onPuntosJugador.emit(this.sumaCartas);
  }

  parar() {
    this.onPararJugador.emit(this.sumaCartas);
    this.bandera=false;
  }


  elegirValorAs(){
        
    this.sumaCartas += parseInt(this.valorAs)
    this.banderaAs =  false;
     }
}
