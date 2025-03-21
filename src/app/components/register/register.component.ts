import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Iuser } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      imgurl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const newUser: Iuser = {
        id: Date.now(), 
        ...this.registerForm.value
      };

      const isRegistered = this.userService.registerUser(newUser);

      if (isRegistered) {
        alert('Registration successful! You can now log in.');
        this.registerForm.reset();
      } else {
        this.errorMessage = 'User already exists!';
      }
    }
  }
}
