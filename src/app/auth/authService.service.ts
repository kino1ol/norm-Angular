import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthService implements CanActivate {
  public isLogined = false
  public userID = 0

  constructor(
    public router: Router,
    public http: HttpClient
    ) {}  

  public canActivate(): boolean {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log('canActive')
      this.router.navigate(["sign/in"]);
      return false;
    }
    return true;
  }

  public isAuth(): Observable<{message: string}> {
    return this.http.get<{message: string}>('https://dummyjson.com/auth/todos', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        'Content-Type': 'application/json'
      },
    })
  }
}