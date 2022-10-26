import { Component } from '@angular/core';
import {LocalStorageService} from "../app/Services/local-storage.service"
import {Router} from "@angular/router"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'blackJack';

  usuarioActual = JSON.stringify(this.local.get("usuarioActual")) 

  constructor(private local:LocalStorageService , private router: Router ){
  }


  logout(){
    this.local.limpiarCompleto();
    console.log(localStorage)
    this.router.navigateByUrl("login")
  }


}
