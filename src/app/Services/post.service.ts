import { Injectable } from '@angular/core';
import { IPost } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl);
  }
  addPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(this.apiUrl, post);
  }
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updatePost(post: IPost): Observable<IPost> {
    return this.http.put<IPost>(`${this.apiUrl}/${post.id}`, post);
  }
  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}/${id}`);
  }

}
