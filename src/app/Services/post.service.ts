import { Injectable } from '@angular/core';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}
  posts: IPost[] = [
    {
      id: 1,
      userId: 1,
      body: "Some quick example text to build on the card title and make up the bulk of the card's",
      imgurl:
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      islike: false,
      date: new Date(),
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      userId: 2,
      body: "Some quick example text to build on the card title and make up the bulk of the card's",
      imgurl:
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      islike: true,
      date: new Date(),
      likes: 0,
      comments: [],
    },
  ];
  addPost(post: IPost) {
    let len = this.posts.length;
    let id = len > 0 ? this.posts[len - 1].id + 1 : 1;
    this.posts.push({
      ...post,
      id: id,
    });
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}
