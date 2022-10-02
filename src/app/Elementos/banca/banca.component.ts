import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MazoServiceService } from '../../Services/mazo-service.service';

@Component({
  selector: 'app-banca',
  templateUrl: './banca.component.html',
  styleUrls: ['./banca.component.css'],
})
export class BancaComponent implements OnInit, OnChanges {
  @Input() banderaJugadorParo: boolean = false;
  @Input() puntosJugador: number;

  sumaCartasBanca: number;

  //declaro el array de cartas de la banca
  arrayCartasBanca: String[];

  //declaro un array que va a contener las direcciones de las imagenes de ka banca
  arrayImagenesBanca: String[];

  constructor(private mazoService: MazoServiceService) {
    //declaro al array como vacio
    this.arrayCartasBanca = [];
    this.arrayImagenesBanca = [];

    this.sumaCartasBanca = 0;
    this.puntosJugador = 0;
  }

  ngOnInit(): void {
    //genero el mazo Inicial
    this.mazoService.generarMazoInicial();

    //cargo la parte de atras de las cartas
    let carta0 = '../../../assets/Cartas/BACK';
    this.arrayCartasBanca.push(carta0);

    //cargo aleatoriamente la primera carta para la banca
    let carta1 = this.mazoService.obtenerCartaAleatoria();
    this.arrayCartasBanca.push(carta1);
    this.sumaCartasBanca += this.calcularValorCarta(carta1);

    this.transformarArrayEnImagenes();
  }

  mostrarCartasRestantes() {
    alert(
      this.mazoService.devolverMazoActual().length +
        ' cartas restantes en el mazo'
    );
  }

  transformarArrayEnImagenes() {
    this.arrayCartasBanca.forEach((element) => {
      let item = '../../../assets/Cartas/' + element + '.png';

      this.arrayImagenesBanca.push(item);
    });
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

  ngOnChanges(): void {
    this.verificarSiJugadorParo();
  }

  verificarSiJugadorParo() {
    if (this.banderaJugadorParo) {
      while (this.sumaCartasBanca <= 17) {
        let carta1 = this.mazoService.obtenerCartaAleatoria();
        this.arrayCartasBanca.push(carta1);
        this.sumaCartasBanca += this.calcularValorCarta(carta1);

        this.arrayImagenesBanca = [];
        this.transformarArrayEnImagenes();
      }
    }

    setTimeout(() => 
    {
      if (this.banderaJugadorParo) 
      {
        if (this.puntosJugador > 21) {alert('BANCA gano porque jugador perdio porque salio del juego primero')}
         else if (this.puntosJugador <= 21 && this.sumaCartasBanca > 21) {alert('JUGADOR gano')}
         else if (this.puntosJugador <= 21 && this.sumaCartasBanca <= 21 && this.puntosJugador < this.sumaCartasBanca) {alert('BANCA gano')}
         else if(this.puntosJugador <= 21 && this.sumaCartasBanca <= 21 && this.puntosJugador > this.sumaCartasBanca){alert('JUGADOR gano')}
         else if (this.puntosJugador === this.sumaCartasBanca) {alert("EMPATE")}
      } 
    }, 500);
    
  }
}
