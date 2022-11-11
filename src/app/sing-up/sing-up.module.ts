import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingUpRoutingModule } from './sing-up-routing.module';
import { SingUpComponent } from './sing-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SingUpComponent
  ],
  imports: [
    CommonModule,
    SingUpRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [SingUpComponent]
})
export class SingUpModule { }
