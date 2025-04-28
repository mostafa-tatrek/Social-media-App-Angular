import { Injectable } from '@angular/core';
import { Iuser } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/users';
  private loggedInUser: Iuser | null = null;

  login(name: string, password: string): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(`${this.apiUrl}?name=${name}&password=${password}`);
  }
  setLoggedInUser(user: Iuser): void {
    this.loggedInUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLoggedInUser(): Iuser | null {
    return this.loggedInUser || JSON.parse(localStorage.getItem('user')!);
  }

  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('user');
  }

  getUser(): Iuser | null {
    return this.loggedInUser || JSON.parse(localStorage.getItem('user')!);
  }

  getUserById(userId: number): Observable<Iuser> {
    return this.http.get<Iuser>(`${this.apiUrl}/${String(userId)}`);
  }

  isAuthenticated(): boolean {
    return this.getUser() !== null;
  }

  registerUser(newUser: Iuser): Observable<Iuser> {
    return this.http.post<Iuser>(this.apiUrl, newUser);
  }
  getusers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.apiUrl);
  }
}
