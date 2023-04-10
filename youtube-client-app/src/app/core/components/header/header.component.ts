import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { defaultLoginBlockText } from '../../constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  sortingVisible = false;
  userLoginName = '';
  isUserLoggedIn!: boolean;
  isLoggedInSubscription!: Subscription;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedInSubscription = this.loginService.isLoggedIn$.subscribe((isLogged) => {
      this.isUserLoggedIn = isLogged;
      this.setUserLoginName();
    });
  }

  ngOnDestroy(): void {
    this.isLoggedInSubscription.unsubscribe();
  }

  setUserLoginName(): void {
    this.userLoginName = this.loginService.userLoginName || defaultLoginBlockText;
  }

  toggleSortingVisible(): void {
    this.sortingVisible = !this.sortingVisible;
  }

  isAdminButtonVisible(): boolean {
    return this.isUserLoggedIn && this.loginService.isUserAdmin;
  }

  logoutUser(): void {
    this.loginService.logoutUser();
  }
}
