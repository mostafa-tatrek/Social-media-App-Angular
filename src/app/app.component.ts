import { Component, Input, input } from '@angular/core';
import { IPost } from './models/post.model';
import { PostService } from './Services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-project';
  constructor( ){
  }



  // @Input() posts: IPost[] = [
  //   {
  //     id: 1,
  //     body: "Some quick example text to build on the card title and make up the bulk of the card's",
  //     imgurl:
  //       'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
  //     islike: false,
  //     date: new Date(),
  //   },
  //   {
  //     id: 2,
  //     body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     imgurl:
  //       'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
  //     islike: true,
  //     date: new Date(),
  //   },
  // ];
  // showForm = false;
  // toggleForm() {
  //   this.showForm = !this.showForm;
  // }
}
