import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ValidateService } from 'src/app/core/services/validate/validate.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isPasswordVisible = false;

  constructor(
    private loginService: LoginService,
    private validateService: ValidateService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.validateService.mixedCaseValidator,
          this.validateService.alphanumericValidator,
          this.validateService.specialCharacterValidator,
        ],
      ],
    });
  }

  submitUser(): void {
    if (this.loginForm.valid) {
      this.loginService.loginUser(this.userEmail?.value, this.userPassword?.value);
    }
  }

  togglePasswordVisible(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  setInputType(): string {
    return this.isPasswordVisible ? 'text' : 'password';
  }

  userEmailError(error: string): ValidationErrors | null | undefined {
    return this.userEmail?.errors?.[error];
  }

  userPasswordError(error: string): ValidationErrors | null | undefined {
    return this.userPassword?.errors?.[error];
  }

  get hasPasswordError(): boolean {
    return this.userPassword?.errors !== null;
  }

  get userEmail(): AbstractControl | null {
    return this.loginForm.get('userEmail');
  }

  get userPassword(): AbstractControl | null {
    return this.loginForm.get('userPassword');
  }
}
