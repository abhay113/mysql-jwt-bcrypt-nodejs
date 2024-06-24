import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(private authService: AuthService) {}
  login(data: any) {
    this.authService.login(data.username, data.password).subscribe((result) => {
      console.log(result);
    });
  }
}
