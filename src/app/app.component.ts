import { Component, Input, input } from '@angular/core';
import { IPost } from './models/post.model';
import { PostService } from './Services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-project';
showNavbar:boolean = true;
ddpostbtn:boolean= true

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.showNavbar = !(event.url.includes('/login') || event.url.includes('/register'));
        this.ddpostbtn = !(event.url.includes('/login') || event.url.includes('/register'));
      }
    });


}
}
