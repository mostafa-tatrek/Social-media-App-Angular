import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Iuser } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      imgurl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.getusers().subscribe(users => {
        const maxId = users.length > 0 ? Math.max(...users.map(s => s.id)) : 0;
        const newUser: Iuser = {
          id: maxId + 1,
          ...this.registerForm.value
        };
        this.userService.registerUser(newUser).subscribe({
          next: (response) => {
            this.registerForm.reset();
            alert('Registration successful! You can now log in.');
            this.userService.setLoggedInUser(newUser);
            this.router.navigate(['/posts']);
          },
          error: (err) => {
            this.errorMessage = 'User already exists!';
          }
        });
      });
    }
  }
}
