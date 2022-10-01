import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MazoServiceService} from "../../Services/mazo-service.service"

@Component({
  selector: 'app-boton-seguir',
  templateUrl: './boton-seguir.component.html',
  styleUrls: ['./boton-seguir.component.css']
})
export class BotonSeguirComponent implements OnInit {

  // onBotonSeguir sera emitido al PADRE pasando por $event la carta obtenida al del servicio
  @Output() onBotonSeguir = new EventEmitter();

  valorCarta : number = 0;

  constructor(private mazoService: MazoServiceService) { }

  ngOnInit(): void {
  }

  seguir(){

    let cartaAgregada: String = this.mazoService.obtenerCartaAleatoria();
    this.mazoService.insertarCartaArrayJugador(cartaAgregada);

    this.mazoService.transformarArrayEnImagenesJugador();

    this.agregarValorCarta(cartaAgregada)

    this.onBotonSeguir.emit(this.valorCarta);
  }

  agregarValorCarta(carta: String){
    this.valorCarta = 0;
    this.valorCarta += this.mazoService.calcularValorCarta(carta);
  }

}
