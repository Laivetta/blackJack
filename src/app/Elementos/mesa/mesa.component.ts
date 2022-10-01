import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  //esta variable la recibo desde el boton SEGUIR y tambien se la paso al JUGADOR
  @Input() cartaNuevaJugador : String = ""

  //esta variable la recibo desde el boton SEGUIR y se la paso al jugador, es el valor de la carta para sumar 
  @Input() valor : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //esta es la funcion que recibe de la emision del HIJO un evento (la carta aleatoria)
  cartaPedidaJugador(carta: String){
      this.cartaNuevaJugador =  carta;
  }

  
  valorCarta(parametro: number){
    this.valor = parametro
  }


}
