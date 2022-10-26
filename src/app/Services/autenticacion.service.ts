import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { UsuarioI } from '../Interfaces/usuario-i';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router"
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  public usuarioActual: BehaviorSubject<UsuarioI>;
  public usuarioLocalStorage = "usarioActualLocalStorage";

  constructor(private http: HttpClient, private router: Router) {
    this.usuarioActual = new BehaviorSubject(
      JSON.parse(localStorage.getItem(this.usuarioLocalStorage)!)
    )
   };

   get getUser(): UsuarioI {
    return this.usuarioActual.value;
   };

   login(data: {login: string, password: string}) : Observable<{error: boolean, msg: string, data: any} > {
    const respuesta = {error:true, msg:"", data: null};

    return this.http.post<{error:boolean, msg: string, data: any}>("...", data)
    .pipe(
      map (r => {
        respuesta.msg = r.msg;
        respuesta.error = r.error;
        respuesta.data = r.data;

        this.guardarUsarioEnLocalStorage(r.data);

        this.usuarioActual.next(r.data);

        if(!respuesta.error){
          this.router.navigateByUrl("mesa")
        }

        return respuesta;
      })
    );
  };

  private guardarUsarioEnLocalStorage (user: UsuarioI){
    localStorage.setItem(this.usuarioLocalStorage, JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem(this.usuarioLocalStorage);
    //this.usuarioActual.next(null);
    this.router.navigateByUrl("login")
  }

}
