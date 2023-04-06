import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

export const AdminGuard = (): boolean | UrlTree => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return loginService.isUserAdmin || router.parseUrl('/page-not-found');
};
