import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sortingVisible = false;

  constructor(private loginService: LoginService) {}

  toggleSortingVisible(): void {
    this.sortingVisible = !this.sortingVisible;
  }

  isLogoutButtonVisible(): boolean {
    return this.loginService.isUserAuthorized();
  }

  logoutUser(): void {
    this.loginService.logoutUser();
  }
}
