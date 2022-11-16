import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SingService } from '../services/sing.service';

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
  public isSubmited = false

  constructor(
    public singService: SingService,
    public route: Router
  ) { }

  public submit(): void {
    if (this.form.valid) {
      this.isSubmited = false
      this.singService.singIn(
        this.form.value.login as string,
        this.form.value.pass as string,
      ).subscribe((res) => {
        localStorage.setItem('token', res.token)
        this.route.navigate(['heroes'])
      })
      
    } else {
      this.isSubmited = true
    }
  }

}
