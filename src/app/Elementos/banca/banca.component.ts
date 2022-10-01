import { Component, OnInit } from '@angular/core';
import {MazoServiceService} from "../../Services/mazo-service.service"

@Component({
  selector: 'app-banca',
  templateUrl: './banca.component.html',
  styleUrls: ['./banca.component.css']
})
export class BancaComponent implements OnInit {


  //declaro el array de cartas de la banca
  arrayCartasBanca: String [];

  //declaro un array que va a contener las direcciones de las imagenes de ka banca
  arrayImagenesBanca : String [];

  constructor(private mazoService: MazoServiceService) {
    
    //declaro al array como vacio
    this.arrayCartasBanca = []
    this.arrayImagenesBanca = []
   }
 

  
  ngOnInit(): void {
    
    //genero el mazo Inicial
    this.mazoService.generarMazoInicial();
   
    //cargo aleatoriamente las primeras 2 cartas para la banca
    this.arrayCartasBanca.push(this.mazoService.obtenerCartaAleatoria());
    this.arrayCartasBanca.push(this.mazoService.obtenerCartaAleatoria());

    this.transformarArrayEnImagenes();
    
  }

  mostrarCartasRestantes(){
    alert (this.mazoService.devolverMazoActual().length + " cartas restantes en el mazo")
  }

  transformarArrayEnImagenes(){
    this.arrayCartasBanca.forEach(element => {
      let item = "../../../assets/Cartas/" +element+ ".png"
     
      this.arrayImagenesBanca.push(item);
    });
  }


 
}
