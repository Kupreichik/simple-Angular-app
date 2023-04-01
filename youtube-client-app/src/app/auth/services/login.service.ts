import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly localStorageKey = 'youtubeAppUserToken';

  isUserAuthorized(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }

  loginUser(email: string, password: string): void {
    const token = email + password;

    localStorage.setItem(this.localStorageKey, token);
  }

  logoutUser(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}
