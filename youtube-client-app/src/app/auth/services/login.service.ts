import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly localStorageKey = 'youtubeAppUserToken';

  isUserAdmin = true;
  isLoggedIn = new BehaviorSubject<boolean>(this.isUserAuthorized());
  userLoginName = this.getUserLogin();

  constructor(private router: Router) {}

  private isUserAuthorized(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }

  private getUserLogin(): string | null {
    return localStorage.getItem(this.localStorageKey)?.split(' - ')[0] || null;
  }

  loginUser(email: string, password: string): void {
    const token = email + ' - ' + password;

    localStorage.setItem(this.localStorageKey, token);
    this.userLoginName = email;
    this.isLoggedIn.next(true);
    this.isUserAdmin = true;
    this.router.navigateByUrl('');
  }

  logoutUser(): void {
    localStorage.removeItem(this.localStorageKey);
    this.userLoginName = null;
    this.isLoggedIn.next(false);
    this.isUserAdmin = false;
    this.router.navigateByUrl('/login');
  }
}
