import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  initAuthListener(){
    this.auth.authState.subscribe( fuser => {
      console.log(fuser?.uid);
      console.log(fuser?.email);
    })
  }
  crearUsuario(nombre: string, correo: string, password: string){
    console.log(nombre,correo,password);
    return this.auth.createUserWithEmailAndPassword(correo, password);
  }

  loginUsuario(correo: string, password: string){
    return this.auth.signInWithEmailAndPassword(correo,password);
  }

  logout(){
    return this.auth.signOut();
  }
}