import { Injectable } from '@angular/core';
import { Iuser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private loggedInUser: Iuser | null = null;
  users: Iuser[] = [
    {
      id: 1,
      name: 'maostafa tarek ',
      imgurl:
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      password: '123',
    },
    {
      id: 2,
      name: 'mana ali',
      imgurl:
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      password: '356',
    },
  ];
  login(name: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.name === name && u.password === password
    );
    if (user) {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('user');
  }
  getUser(): Iuser | null {
    return this.loggedInUser || JSON.parse(localStorage.getItem('user')!);
  }

  getUserById(userId: number): Iuser | undefined {
    return this.users.find((user) => user.id === userId);
  }

  isAuthenticated(): boolean {
    return this.getUser() !== null;
  }
  registerUser(newUser: Iuser): boolean {
    if (this.users.find((user) => user.name === newUser.name)) {
      return false;
    }
    this.users.push(newUser);
    return true;
  }
}
