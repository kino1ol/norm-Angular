import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos, Todo } from '../types/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) {}

  public get(): Observable<Todos> {
    return this.http.get<Todos>(`https://dummyjson.com/todos/user/${localStorage.getItem('id')}`)
  }

  public add(body: any): Observable<any> {
    return this.http.post('https://dummyjson.com/todos/add', JSON.stringify(body), {headers: { 'Content-Type': 'application/json' }})
  }

  public update(body: Todo, id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://dummyjson.com/todos/${id}`, JSON.stringify(body))
  }

  public delete(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`https://dummyjson.com/todos/${id}`)
  }
}
