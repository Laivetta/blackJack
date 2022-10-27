import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private uri: string = "http://localhost:8080/auth/login/"
   constructor(private http: HttpClient) { }

   login(usuario: string, clave: string): Observable<any> {
    
     return this.http.post(this.uri,{username: usuario, password: clave});

  }
}
