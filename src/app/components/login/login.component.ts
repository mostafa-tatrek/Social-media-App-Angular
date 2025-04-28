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
    this.userService.login(this.name, this.password).subscribe(users => {
      const user = users.find(u => u.name === this.name && u.password === this.password);
      if (user) {
        this.userService.setLoggedInUser(user);
        alert('Login successful!');
        this.router.navigate(['posts']);
      } else {
        alert('Invalid credentials');
      }
    });
  }

}
