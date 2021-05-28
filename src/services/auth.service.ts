import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) { }

  // Para obtener informacion del usuario autenticado/activo en firebase
  initAuthListener(){
    this.auth.authState.subscribe( fuser => {
      console.log(fuser?.uid);
      console.log(fuser?.email);
    })
  }
  crearUsuario(nombre: string, correo: string, password: string){
    console.log(nombre,correo,password);
    return this.auth.createUserWithEmailAndPassword(correo, password)
                .then( ({user}) => {
                    let newUser = new Usuario(user.uid,nombre, user.email);
                    return this.firestore.doc(`${ user.uid }/usuario`)
                                .set({...newUser})
                });
  }

  loginUsuario(correo: string, password: string){
    return this.auth.signInWithEmailAndPassword(correo,password);
  }

  logout(){
    return this.auth.signOut();
  }

  isAuth(){
    return this.auth.authState.pipe(
               map( fuser => fuser != null )
            );
  }
}
