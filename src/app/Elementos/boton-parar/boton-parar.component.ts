import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-parar',
  templateUrl: './boton-parar.component.html',
  styleUrls: ['./boton-parar.component.css']
})
export class BotonPararComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parar(){
    alert("sin funcionalidad");
  }

}
