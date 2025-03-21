import { Component, EventEmitter, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../Services/post.service';
import { UserService } from '../../Services/user.service';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private postsrevice: PostService,
    private userService: UserService
  ) {
    this.form = this.fb.group({
      body: ['', [Validators.required, Validators.minLength(10)]],
      imgurl: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      const user = this.userService.getUser();
      if (!user) {
        alert('Please log in first.');
        return;
      }

      const newPost: IPost = {
        id: Date.now(),
        userId: user.id,
        body: this.form.value.body,
        imgurl: this.form.value.imgurl,
        date: new Date(),
        islike: false,
        likes: 0,
        comments: [],
      };

      this.postsrevice.addPost(newPost);
      this.form.reset();
    }
  }
}
