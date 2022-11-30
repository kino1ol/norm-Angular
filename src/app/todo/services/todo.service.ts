import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/authService.service';
import { Todos, Todo } from '../types/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
    private user: AuthService
  ) {}

  public get(): Observable<Todos> {
    return this.http.get<Todos>(`https://dummyjson.com/todos/user/${this.user.userID}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        'Content-Type': 'application/json'
      },
    })
  }

  public add(body: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://dummyjson.com/todos/add', body, {headers: { 'Content-Type': 'application/json' }})
  }

  public update(body: Todo, id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://dummyjson.com/todos/${id}`, body)
  }

  public delete(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`https://dummyjson.com/todos/${id}`)
  }
}
