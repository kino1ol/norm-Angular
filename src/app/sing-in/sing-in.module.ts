import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInRoutingModule } from './sing-in-routing.module';
import { SingInComponent } from './sing-in.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SingInComponent
  ],
  imports: [
    CommonModule,
    SingInRoutingModule,
    ReactiveFormsModule
  ],
  exports: [SingInComponent]
})
export class SingInModule { }
