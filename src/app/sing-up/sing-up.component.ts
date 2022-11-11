import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const validator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value;
  if (!value) {
    return null;
  }
  const passwordValid = /^(?=.*?[A-Z])(?=.*?[0-9])/.test(value);
  return !passwordValid ? { passwordStrength: value } : null;
};

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingUpComponent {

  public form = new FormGroup({
    login: new FormControl<string>('', Validators.required),
    name: new FormControl<string>('', [Validators.required, Validators.min(6), Validators.max(64)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    pass: new FormControl<string>('',
      [Validators.required, Validators.min(8), Validators.max(64), validator],
    ),
    repeatPassword: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.pattern("^[0-9]{9,15}"), Validators.required])
  })

  public isSubmited$ = new BehaviorSubject<boolean>(false)

  constructor(
    public http: HttpClient,
    public route: Router
  ) { }

  get email(): FormControl<string | null> {
    return this.form.controls.email
  }

  get name(): FormControl<string | null> {
    return this.form.controls.name
  }
  get login(): FormControl<string | null> {
    return this.form.controls.login
  }
  get pass(): FormControl<string | null> {
    return this.form.controls.pass
  }
  get repeatPassword(): FormControl<string | null> {
    return this.form.controls.repeatPassword
  }
  get phone(): FormControl<string | null> {
    return this.form.controls.phone
  }


  public submit(): void {
    if (this.form.valid) {
      this.isSubmited$.next(false)
      this.http.post('https://dummyjson.com/users/add', JSON.stringify({
        login: this.login.value,
        name: this.name.value,
        email: this.email.value,
        pass: this.pass.value,
        repeatPassword: this.pass.value,
        phone: this.pass.value,
      })).subscribe((_) => {
        this.route.navigate(['sing-in'])
      })
    } else {
      this.isSubmited$.next(true)
    }
  }
}
