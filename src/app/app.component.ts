import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ingresoEgresoApp';
  constructor(firestore: AngularFirestore,
              private authService : AuthService) {
                this.authService.initAuthListener();
              }
}
