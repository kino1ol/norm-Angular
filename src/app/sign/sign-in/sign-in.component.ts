import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignService } from '../services/sign.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {

  public form = new FormGroup({
    login: new FormControl<string>('', Validators.required),
    pass: new FormControl<string>('', Validators.required)
  })
  public isSubmited = false

  constructor(
    public signService: SignService,
    public route: Router
  ) { }

  public submit(): void {
    if (this.form.valid) {
      this.isSubmited = false
      this.signService.signIn(
        this.form.value.login as string,
        this.form.value.pass as string,
      ).subscribe((res) => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('id', String(res.id))
        this.route.navigate(['heroes'])
      })
      
    } else {
      this.isSubmited = true
    }
  }

}
