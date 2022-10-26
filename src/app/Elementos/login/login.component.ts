import { Component, OnInit } from '@angular/core';
import { UsuarioI } from '../../Interfaces/usuario-i';
import { Router } from '@angular/router';
import {LocalStorageService} from "../../Services/local-storage.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioI = {} as UsuarioI;

  constructor(private router: Router, private local: LocalStorageService ) {}

  ngOnInit(): void {}

  autenticar() {
    if (this.usuario.login === 'a' && this.usuario.password === 'a') {
      this.local.set("usuarioActual",this.usuario)

      console.log(this.local.get("usuarioActual"));
      this.router.navigateByUrl('mesa');
    } else{
      alert("error en login")
    }
  }
}
