import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

   private uri: string = "http://localhost:8080/auth"

   constructor(private http: HttpClient) { }

   registrarse (usuario:  string, clave: string) : Observable<any> {
    return this.http.post(this.uri + "/register", {username: usuario, password: clave})
   }


   login(usuario: string, clave: string): Observable<any> {
    
     return this.http.post(this.uri+"/login",{username: usuario, password: clave});

  }
}
