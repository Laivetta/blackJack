import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  set(key: string, data: any){
    try{
      localStorage.setItem(key, JSON.stringify(data));
    }catch (e){
        alert("error al guardar en local storage: " + e)
    }
  }


  get(key: string){
    try{
      return JSON.parse(localStorage.getItem(key)  || "[]")
      //https://es.stackoverflow.com/questions/524752/no-se-puede-asignar-un-argumento-de-tipo-string-null-al-par%C3%A1metro-de-tipo-s
    }catch(e){
      alert("error al obtener del local storage: " + e)
    }   
  }

  limpiarCompleto(){
    try{
      localStorage.clear();
    } catch(e) {
      alert("error borrar completo el local storage: " + e)
    }     
  }

  removerItem(key: string){
    try{
      localStorage.removeItem(key);
    } catch(e){
      alert("error borrar el item del local storage: " + e)
    }

  }

  constructor() { }
}
