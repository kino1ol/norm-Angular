import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/authService.service';
import { SignService } from '../services/sign.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit{

  public form = new FormGroup({
    login: new FormControl<string>('', Validators.required),
    pass: new FormControl<string>('', Validators.required),
  })
  public isSubmited = false

  constructor(
    public signService: SignService,
    public route: Router,
    private user: AuthService
  ) { }

  public submit(): void {
    if (this.form.valid) {
      this.isSubmited = false
      this.signService.signIn(
        this.form.value.login as string,
        this.form.value.pass as string,
      ).subscribe((res) => {
        if (res.token) {
          console.log(1)
          localStorage.setItem('token', res.token)
          this.user.userID = res.id
          this.route.navigate(['todo'])
        }
      })
      
    } else {
      this.isSubmited = true
    }
  }

  public ngOnInit(): void {
    this.user.isAuth().subscribe(() => {
      this.route.navigate(['todo'])
    })
  }

}
