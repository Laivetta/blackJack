import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit, OnDestroy {

  banderaJugador: boolean = false
  puntosJugador : number;

  constructor(private router: Router) {
    this.puntosJugador =  0;
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{

  }


  capturarPuntosJugador(p_puntosJugador: number){
    console.log("valor cartas jugador: " + p_puntosJugador)
  }


  cambiarBandera(p_puntosJugador: number){
    this.puntosJugador = p_puntosJugador 
    this.banderaJugador = true
  }

  reiniciar(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["mesa"]);
  }); 
  }
}
