import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  userEmail = '';
  userPassword = '';

  constructor(private loginService: LoginService, private router: Router) {}

  submitUser(): void {
    this.loginService.loginUser(this.userEmail, this.userPassword);

    this.router.navigateByUrl('/main')
  }
}
