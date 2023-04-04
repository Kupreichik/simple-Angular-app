import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly localStorageKey = 'youtubeAppUserToken';

  constructor(private router: Router) {}

  isUserAuthorized(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }

  loginUser(email: string, password: string): void {
    const token = email + password;

    localStorage.setItem(this.localStorageKey, token);
    this.router.navigateByUrl('');
  }

  logoutUser(): void {
    localStorage.removeItem(this.localStorageKey);
    this.router.navigateByUrl('/login');
  }
}
