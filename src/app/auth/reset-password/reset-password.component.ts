// src/app/auth/reset-password/reset-password.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
  email = '';
  token = '';
  newPassword = '';
  message = '';
  error = '';

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.token = params['token'];
    });
  }

  resetPassword() {
    this.authService.resetPassword(this.email, this.token, this.newPassword).subscribe({
      next: () => {
        this.message = ' Password reset successfully!';
        this.error = '';
      },
      error: err => {
        this.message = '';
        this.error = ' Failed to reset password.';
      }
    });
  }
}
