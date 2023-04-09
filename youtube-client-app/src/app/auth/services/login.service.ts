import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly localStorageKey = 'youtubeAppUserToken';

  isUserAdmin = true;

  constructor(private router: Router) {}

  isUserAuthorized(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }

  loginUser(email: string, password: string): void {
    const token = email + password;

    localStorage.setItem(this.localStorageKey, token);
    this.isUserAdmin = true;
    this.router.navigateByUrl('');
  }

  logoutUser(): void {
    localStorage.removeItem(this.localStorageKey);
    this.isUserAdmin = false;
    this.router.navigateByUrl('/login');
  }
}
