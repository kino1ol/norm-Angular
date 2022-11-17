import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../types/sing';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(
    public http: HttpClient,
    public route: Router
  ) { }

  public signIn(username: string, password: string): Observable<User> {
    return this.http.post<User>('https://dummyjson.com/auth/login', JSON.stringify({
      username,
      password,
    }), {headers: { 'Content-Type': 'application/json' }})
  }

  public signUp(body: any): Observable<unknown> {
    return this.http.post('https://dummyjson.com/users/add', JSON.stringify(body))
  }
}
