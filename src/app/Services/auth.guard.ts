import { inject, Injectable } from '@angular/core';
import {  CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

// @Injectable({
//   providedIn: 'root'
// })
export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
