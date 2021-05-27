import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  registroForm : FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre  : ['', Validators.required],
      correo  : ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }

  crearUsuario(){
    const {nombre, correo, password } = this.registroForm.value;

    this.authService.crearUsuario(nombre, correo, password)
    .then( credenciales => {
      console.log(credenciales);
    })
    .catch( err => console.error(err));
  }
}
