import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    if (this.userService.login(this.name, this.password)) {
      alert('Login successful!');
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }
}
