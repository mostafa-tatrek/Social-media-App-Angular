import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post.model';
import { PostService } from '../../Services/post.service';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  comment: string = '';

  constructor(
    private postService: PostService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPosts();
  }


  loadPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }


  addComment(post: IPost) {
    if (this.comment.trim()) {
      post.comments.push(this.comment);
      this.comment = '';
      this.savePost(post);
    }
  }

  onButtonClick(post: IPost) {
    post.islike = true;
    post.likes =++post.likes;
    this.savePost(post);
  }

  savePost(post: IPost) {
    this.postService.updatePost(post).subscribe(updatedPost => {
      const index = this.posts.findIndex(p => p.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = updatedPost;
      }
    });
  }

  onButtonClickdelete(id: number, userId: number) {
    const loggedInUser = this.userService.getUser();
    if (loggedInUser && loggedInUser.id === userId) {
      this.postService.deletePost(id).subscribe(() => {
        this.loadPosts();
      });
    } else {
      alert('Sorry, you cannot delete this post');
    }
  }
}
