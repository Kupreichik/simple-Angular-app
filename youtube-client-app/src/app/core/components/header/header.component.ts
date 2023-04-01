import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sortingVisible = false;

  constructor(private loginService: LoginService, private router: Router) {}

  toggleSortingVisible() {
    this.sortingVisible = !this.sortingVisible;
  }

  logoutUser() {
    this.loginService.logoutUser();
    this.router.navigateByUrl('/login');
  }
}
