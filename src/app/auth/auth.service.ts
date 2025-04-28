// src/app/auth/auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://your-api-url/api'; 

  constructor(private http: HttpClient) {}

  sendPasswordResetEmail(email: string) {
    return this.http.post(`${this.apiUrl}/SendPasswordResetEmail`, email, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  resetPassword(email: string, token: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/ResetPassword`, {
      email,
      token,
      newPassword
    });
  }
}

