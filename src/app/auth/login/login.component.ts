import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo  : ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginUsuario(){
    if (this.loginForm.valid){
      const {correo, password } = this.loginForm.value;

      this.authService.loginUsuario(correo, password)
      .then(rta => {
          console.log("logueado");
          this.router.navigate(['']);
      }).catch( err => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      })
    }
  }

}
