import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingInComponent {

  public form = new FormGroup({
    login: new FormControl<string>('', Validators.required),
    pass: new FormControl<string>('', Validators.required)
  })
  public isSubmited$ = new BehaviorSubject<boolean>(false)

  constructor(
    public http: HttpClient,
    public route: Router
  ) { }
  get login(): FormControl<string | null> {
    return this.form.controls.login
  }

  get pass(): FormControl<string | null> {
    return this.form.controls.pass
  }

  public submit(): void {
    if (this.form.valid) {
      this.isSubmited$.next(false)
      this.http.post('https://dummyjson.com/auth/login', JSON.stringify({
        login: this.login.value,
        pass: this.pass.value,
      })).subscribe({
        error: () => {
          console.log('all good');
          this.route.navigate(['main'])
          localStorage.setItem('token', 'token');
        },
      })
    } else {
      this.isSubmited$.next(true)
    }
  }

}
