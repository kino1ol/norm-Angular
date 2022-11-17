import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignComponent } from './sign.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignRoutingModule } from './sign-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    SignComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SignComponent
  ]
})
export class SignModule { }
