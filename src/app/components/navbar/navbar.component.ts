import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public userService: UserService, private router: Router) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
