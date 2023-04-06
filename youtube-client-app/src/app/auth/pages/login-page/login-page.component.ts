import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { passwordPattern } from '../../constants/regExpPatterns.constant';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.pattern(passwordPattern)]],
    });
  }

  submitUser(): void {
    if(this.loginForm.valid) {
      this.loginService.loginUser(this.userEmail?.value, this.userPassword?.value);
    }
  }

  get userEmail() {
    return this.loginForm.get('userEmail');
  }

  get userPassword() {
    return this.loginForm.get('userPassword');
  }
}
