import { Component, Input, input } from '@angular/core';
import { IPost } from '../../models/post.model';
import { PostService } from '../../Services/post.service';
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  constructor(private postService: PostService,private userService: UserService) {}
  get posts(): IPost[] {
    return this.postService.posts;
  }

  comment: string = '';
  addComment(post: IPost) {
    if (this.comment.trim()) {
      post.comments.push(this.comment);
      this.comment = ''; 
    }
  }
  onButtonClick(post: IPost) {
    console.log('Button was clicked!');
    post.islike = !post.islike;
    post.islike ? post.likes++ : post.likes--;
  }
  onButtonClickdelete(id: number, userId: number) {
    const loggedInUser = this.userService.getUser();
    if (loggedInUser && loggedInUser.id === userId) {
      this.postService.deletePost(id);
    } else {
      alert('sorry you can not delete this post');
    }
  }
}
