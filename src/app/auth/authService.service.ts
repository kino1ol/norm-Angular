import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {
  constructor(public router: Router) {}

  public canActivate(): boolean {
    const token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(["sign/in"]);
      return false;
    }
    return true;
  }
}