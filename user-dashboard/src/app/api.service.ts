import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.BASE_URL}/users`).pipe(
      map((data: any) => data),
      catchError(err => throwError(() => new Error('Failed to load users')))
    );
  }

  getPosts() {
    return this.http.get(`${this.BASE_URL}/posts`).pipe(
      map((data: any) => data.slice(0, 10)), 
      catchError(err => throwError(() => new Error('Failed to load posts')))
    );
  }

  getComments() {
    return this.http.get(`${this.BASE_URL}/comments`).pipe(
      map((data: any) => data.slice(0, 10)), 
      catchError(err => throwError(() => new Error('Failed to load comments')))
    );
  }
}
