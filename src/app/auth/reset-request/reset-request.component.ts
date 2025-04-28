// src/app/auth/reset-request/reset-request.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-request',
  templateUrl: './reset-request.component.html'
})
export class ResetRequestComponent {
  email = '';
  message = '';

  constructor(private authService: AuthService) {}

  requestReset() {
    this.authService.sendPasswordResetEmail(this.email).subscribe({
      next: () => this.message = ' Reset link sent to your email.',
      error: () => this.message = ' Email not found.'
    });
  }
}

