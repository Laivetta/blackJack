import { Component, OnInit } from '@angular/core';
import { UsuarioI } from '../../Interfaces/usuario-i';
import { Router } from '@angular/router';
import {LocalStorageService} from "../../Services/local-storage.service"
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {LoginService} from "../../Services/login.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formularioLogin: UntypedFormGroup
  mensajeError: string = ""

  usuario: UsuarioI = {} as UsuarioI;

  constructor(private router: Router, private local: LocalStorageService, private formBuilder: UntypedFormBuilder, private loginSevice: LoginService  ) {
    this.formularioLogin=this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    }) 
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


  autenticar(){
    if(this.formularioLogin.invalid){
     this.mensajeError= "debe cargar todos los datos" ;

      setTimeout(() => {this.mensajeError=""}, 2000)
    } else {

      //traigo todos los datos del formuluario y los asigno a una variable
      const valorUsuario = this.formularioLogin.value;
      console.log(valorUsuario);

      this.loginSevice.login(valorUsuario.username, valorUsuario.password).subscribe({
        next: () => {
          alert("login exitoso")
         },
        error: (e) =>{
          alert("eror al hacer login: " + e)
        } 
      })
     
    }


  }

}
