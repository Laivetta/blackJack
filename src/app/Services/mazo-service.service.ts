import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MazoServiceService {
  //array general
  arrayNumero: String[];
  arrayTipo: String[];
  arraryMazo: String[];

  //array jugador
  arrayJugador: String[];
  arrayImagenesJugador: String[];

  constructor() {
    this.arrayNumero = ['2', '3', '4','5', '6', '7', '8', '9','10', 'A','J', 'Q', 'K' ];
    //this.arrayNumero = ['2', '3', 'A'];
    this.arrayTipo = ['D', 'H', 'S', 'C'];
    this.arraryMazo = [];

    this.arrayJugador = [];
    this.arrayImagenesJugador = [];

  
  }

  

  //MAZO ORIGINAL
  generarMazoInicial(): String[] {
    this.arrayNumero.forEach((n) => {
      this.arrayTipo.forEach((t) => {
        this.arraryMazo.push(n + '-' + t);
      });
    });
    return this.arraryMazo;
  }

  devolverMazoActual(): String[] {
    return this.arraryMazo;
  }



  //MAZO JUGADOR
  devovlerArrayJugador(): String[] {
    return this.arrayJugador;
  }

  insertarCartaArrayJugador(carta: String) {
    this.arrayJugador.push(carta);
  }

  devolverArrayImagenesJugador(): String[] {
    return this.arrayImagenesJugador;
  }

  transformarArrayEnImagenesJugador(){
    //aca tengo que vaciar el arrayImagenesJugador porque sino duplico todo
    this.arrayImagenesJugador = [];
    this.arrayJugador.forEach(element => {
      let item = "../../../assets/Cartas/" +element+ ".png"
     
      this.arrayImagenesJugador.push(item);
    });
  }


  //VARIOS

  obtenerCartaAleatoria(): String {
    //genero un numero aleatorio entre 0 y el numero de cartas del MAZO
    const indexEncontrado: number = Math.floor(
      Math.random() * this.arraryMazo.length
    );

    //del MAZO obtengo el ELEMENTO en la posicion del numero aleatorio
    let elementoEncontrado: String = this.arraryMazo[indexEncontrado];

    //del MAZO elimino el ELEMENTO en la posicion del INDICE
    this.arraryMazo.splice(indexEncontrado, 1);

    //devuelvo el ELEMENTO (formato numero-tipo, es un String)
    return elementoEncontrado;
  }


  calcularValorCarta(carta: String) : number {
    //el split divide el string cada vez que encuentra el - . Despues obtengo la primer parte de la carta que es un numero
    let data = carta.split("-")[0]

    if (data === "J" || data === "K" || data === "Q" )
    {
      return 10;

    } else if (data === "A")
    {
      return 11
    } else 
    {
      return parseInt(data);
    }

  }
}
