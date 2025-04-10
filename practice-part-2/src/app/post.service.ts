import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getFirst10Posts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(posts => posts.slice(0, 10)) 
    );
  }
}
