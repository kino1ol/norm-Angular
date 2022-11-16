import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SingService } from '../services/sing.service';

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

  public isSubmited = false

  constructor(
    public route: Router,
    public singService: SingService
  ) { }

  public passIsEqual(): boolean {
    return this.form.value.pass === this.form.value.repeatPassword
  }

  public submit(): void {
    if (this.form.valid && this.passIsEqual()) {
      this.isSubmited = false
      this.singService.singUp({
        login: this.form.value.login,
        name: this.form.value.name,
        email: this.form.value.email,
        pass: this.form.value.pass,
        repeatPassword: this.form.value.repeatPassword,
        phone: this.form.value.phone,
      }).subscribe((_) => {
        this.route.navigate(['heroes'])
      })
    } else {
      this.isSubmited = true
    }
  }
}
