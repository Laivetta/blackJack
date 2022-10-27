import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioI } from '../../Interfaces/usuario-i';
import { Router } from '@angular/router';
import {LocalStorageService} from "../../Services/local-storage.service"
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {JugadorService} from "../../Services/jugador.service"
import { Subscription } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formularioLogin: UntypedFormGroup
  mensajeError: string = ""
  suscripcion = new Subscription();

  usuario: UsuarioI = {} as UsuarioI;

  constructor(private router: Router, private local: LocalStorageService, private formBuilder: UntypedFormBuilder, private JugadorService: JugadorService  ) {
    this.formularioLogin=this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    }) 
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {}

  // autenticar() {
  //   if (this.usuario.usuario === 'a' && this.usuario.password === 'a') {
  //     this.local.set("usuarioActual",this.usuario)

  //     console.log(this.local.get("usuarioActual"));
  //     this.router.navigateByUrl('mesa');
  //   } else{
  //     alert("error en login")
  //   }
  // }


  login(){
    if(this.formularioLogin.invalid){
     this.mensajeError= "debe cargar todos los datos" ;

      setTimeout(() => {this.mensajeError=""}, 2000)
    } else {

      //traigo todos los datos del formuluario y los asigno a la variable valorUsuario
      const valorUsuarioFormulario = this.formularioLogin.value;
      console.log(valorUsuarioFormulario);

      this.suscripcion.add(
      this.JugadorService.login(valorUsuarioFormulario.username, valorUsuarioFormulario.password).subscribe({
        next: (respuesta) => {
          localStorage.setItem("token", respuesta.jwt)
          console.log(localStorage.getItem("token"))
          this.router.navigateByUrl("mesa")
          
         },
        error: (e) =>{
          alert("error al hacer login: " + e.error.message)
        } 
      }))
    }


  }

}
