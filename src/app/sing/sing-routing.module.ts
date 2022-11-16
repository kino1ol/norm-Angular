import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from '../sing-in/sing-in.component';
import { SingUpComponent } from '../sing-up/sing-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "up",
    pathMatch: 'full'
  },
  { path: 'up', component: SingUpComponent },
  { path: 'in', component: SingInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingRoutingModule { }
