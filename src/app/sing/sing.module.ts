import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingComponent } from './sing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SingRoutingModule } from './sing-routing.module';
import { SingInComponent } from '../sing-in/sing-in.component';
import { SingUpComponent } from '../sing-up/sing-up.component';


@NgModule({
  declarations: [
    SingComponent,
    SingInComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule,
    SingRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SingComponent
  ]
})
export class SingModule { }
